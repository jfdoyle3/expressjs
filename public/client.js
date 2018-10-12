$(function(){

    $.get('/blocks',appendToList);

    function appendToList(blocks){

        console.log(blocks)
        var list=[];
        for (var i in blocks){
            // list.push($('li',{text: blocks[i]}));
            list.push(blocks[i]);

        }
        console.log('list:', list)
        $('.block-list').append(list);
    }
    
});