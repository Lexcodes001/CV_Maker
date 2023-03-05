function closeTooltip() {
    toolTip.style.transform = 'scale(0)';
}

function showTooltip() {
    toolTip.style.transformOrigin = 'top left';
    toolTip.style.transition = 'transform .5s ease';
    toolTip.style.transform = 'scale(1)';
    setTimeout(closeTooltip, 5000);
}

setTimeout(showTooltip, 5000);