if (location.hostname === 'github.com' || location.hostname === 'gist.github.com' || location.hostname === 'gitlab.com' || location.hostname === 'medium.com') {
    Array.prototype.forEach.call(document.getElementsByClassName('blob-code'), x => x.classList.add('notranslate'))
    Array.prototype.forEach.call(document.getElementsByClassName('blob-code-inner'), x => x.classList.add('notranslate'))
    Array.prototype.forEach.call(document.getElementsByClassName('content'), x => x.classList.add('notranslate'))
    Array.prototype.forEach.call(document.getElementsByClassName('file'), x => x.classList.add('notranslate'))
    Array.prototype.forEach.call(document.getElementsByClassName('final-path'), x => x.classList.add('notranslate'))
    Array.prototype.forEach.call(document.getElementsByTagName('code'), x => x.classList.add('notranslate'))
    Array.prototype.forEach.call(document.getElementsByTagName('pre'), x => x.classList.add('notranslate'))
}

if (location.hostname === 'blog.discordapp.com') {
    Array.prototype.forEach.call(document.getElementsByTagName('iframe'), x => x.classList.add('notranslate'))
}
