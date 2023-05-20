const tabItems =  document.querySelectorAll('.tab-item')
const tabContentItem = document.querySelectorAll('.tab-content-item')


// select tab content item 
function selectItem(e) {
    // remove all show and border classes
    removeBorder()
    removeShow()

    // add border to current tab 
    this.classList.add('tab-border')
    //grab content item from DOM
    const tabContentItem = document.querySelectorAll ('#$ {this.id}-content')
   // add show class 
    tabContentItem.classList.add ('show')
}
 //remove button border at all tab items 
 function removeBorder() {
    tabItems.forEach(item => {
        item.classList.remove('tab-border')
    })
 }
    // remove show class from all content items 
    function removeShow() {
        tabContentItems.forEach(item => {
            item.classList.remove('tab-border')
        })
    }

    //listen for tab item click 
    tabItems.forEach(item => {
        item.addEventListener('click', selectItem)
    })