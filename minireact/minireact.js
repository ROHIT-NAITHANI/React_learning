function customRender (reactElement,contaner){
    // const domelement = document.createElement(reactElement.type)
    // domelement.innerHTML = reactElement.children
    // domelement.setAttribute('href', reactElement.props.href)
    // domelement.setAttribute('target', reactElement.props.target)

    // contaner.appendChild(domelement)


    const domelement = document.createElement(reactElement.type)
    domelement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop == 'children') continue;
        domelement.setAttribute(prop,reactElement.props[prop])
        
    }
    contaner.appendChild(domelement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')
customRender(reactElement,mainContainer)