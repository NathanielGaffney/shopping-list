$('form button').click(function(e) {
    e.preventDefault();
    let item = $('form input').val();
    $('ul').append(`<li>
        <span class="shopping-item">${item}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
});

$('body').on('click', '.shopping-item-toggle', function(e){
  let itemCheck = $(e.target).closest('li');
  itemCheck = itemCheck.find('span.shopping-item');
    itemCheck.toggleClass('shopping-item__checked');
});

$('body').on('click', '.shopping-item-delete', function(e){
  $(e.target).closest('li').remove();
});
