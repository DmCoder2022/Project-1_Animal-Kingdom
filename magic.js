function handleClick(node)
{
    var value = node.getAttribute('class') || '';
    value = value === '' ? 'clicked' : '';
    node.setAttribute('class', value);
}