(function(){
    var repoLinkContent = `<img src='https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png' alt='GitHub Repo'>`;
    repoLinkContent = `https://github.com/yairEO/tagify/raw/master/docs/readme-header.svg`
    var repoLink = `<a class='repoLink' title='Go To Repo' href='https://github.com/yairEO/tagify'>
                    ${repoLinkContent}
                    </a>`

    var intro = `<section class="pen-intro">
        ${repoLink}
    </section>`

    document.body.insertAdjacentHTML('beforeend', intro)
})()