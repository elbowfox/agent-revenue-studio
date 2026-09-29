const KEY = 'pp_scans';
function used() { return Number(localStorage.getItem(KEY) || 0); }
function bump() { localStorage.setItem(KEY, String(used() + 1)); }

document.getElementById('scan').onclick = async () => {
  if (used() >= 10 && !localStorage.getItem('pp_paid')) {
    document.getElementById('out').innerHTML = '<span class="bad">Free scans used. Unlock $9/mo.</span>';
    return;
  }
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const [{ result }] = await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      const title = document.title || '';
      const desc = document.querySelector('meta[name="description"]')?.content || '';
      const h1s = [...document.querySelectorAll('h1')].map(h => h.innerText.trim()).filter(Boolean);
      const imgs = [...document.images];
      const noAlt = imgs.filter(i => !i.alt).length;
      const links = [...document.links];
      const emptyCta = [...document.querySelectorAll('a,button')].filter(el => !el.innerText.trim() && !el.getAttribute('aria-label')).length;
      return {
        url: location.href,
        title, titleLen: title.length,
        desc, descLen: desc.length,
        h1s, h1count: h1s.length,
        images: imgs.length, noAlt,
        links: links.length, emptyCta
      };
    }
  });
  bump();
  const r = result;
  const lines = [
    score(r.titleLen >= 15 && r.titleLen <= 65, `Title (${r.titleLen} chars)`, r.title || '(missing)'),
    score(r.descLen >= 70 && r.descLen <= 160, `Meta description (${r.descLen})`, r.desc || '(missing)'),
    score(r.h1count === 1, `H1 count: ${r.h1count}`, r.h1s[0] || ''),
    score(r.noAlt === 0, `Images missing alt: ${r.noAlt}/${r.images}`, ''),
    score(r.emptyCta === 0, `Unlabeled buttons/links: ${r.emptyCta}`, ''),
    `<div>Scans used: ${used()}/10</div>`
  ];
  document.getElementById('out').innerHTML = lines.join('');
};

function score(ok, label, extra) {
  const cls = ok ? 'ok' : 'bad';
  return `<div class="${cls}">${ok ? '●' : '○'} ${label}</div>${extra ? `<div style="color:#9aa3b8;margin:0 0 8px 12px">${extra}</div>` : ''}`;
}
