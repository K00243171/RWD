(function sortList($){
    var container = $(".sort-list");
    var items = $(".sort-item");
    

    items.sort(function(a,b){
     a = parseFloat($(a).attr("datetime"));
     b = parseFloat($(b).attr("datetime"));
        return a>b ? -1 : a<b ? 1 : 0;
    }).each(function(){
        container.prepend(this);
    });

});