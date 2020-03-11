$(function(){

    $.get('/blocks', appendToList);

    function appendToList(blocks){
        let list=[];
        
        for (let block in blocks){
            list.push($('<li>', {text: blocks[block]}));
        }
        $('.block-list').append(list);
    }
});