var test = {
    search: function(searchword){
        var tokenPattern = new RegExp('[^a-zA-Z]');
        var blockNumberPattern = new RegExp('[^0-9]');
        // Account address, Transaction, Block Number, Token name.
        if ( searchword == null || searchword == '' ){
            return;
        }else if ( !tokenPattern.test(searchword) ){
            $.ajax({
                url:'https://api.tronscan.org/api/token/'+searchword,
                type:'GET',
                data:{},
                dataType:'JSON',
                success:function (res) {
                    window.location.href = 'tokens.html?name='+searchword;
                },error:function(){ 
                    window.location.href = 'search.html?q='+searchword;
                }
            })
            // https://api.tronscan.org/api/token?name={searchword}
            // 对应单个Token页面.
            return;
        }else if ( !blockNumberPattern.test(searchword)){
            $.ajax({
                url:'https://api.tronscan.org/api/block/'+searchword,
                type:'GET',
                data:{},
                dataType:'JSON',
                success:function (res) {
                    window.location.href = 'blocks.html?number='+searchword;
                },error:function(){ 
                    window.location.href = 'search.html?q='+searchword;
                }
            })
            return;
        }else if ( searchword.length > 50 )
        {
            // Transaction Pattern.
            $.ajax({
                url:'https://api.tronscan.org/api/transaction/'+searchword,
                type:'GET',
                data:{},
                dataType:'JSON',
                success:function (res) {
                    window.location.href = 'transactions.html?hash='+searchword;
                },error:function(){ 
                    window.location.href = 'search.html?q='+searchword;
                }
            })
            return;
        }else if ( searchword.length < 50 )
        {
            // Account Address.
            $.ajax({
                url:'https://api.tronscan.org/api/account/'+searchword,
                type:'GET',
                data:{},
                dataType:'JSON',
                success:function (res) {
                    window.location.href = 'accounts.html?balance='+searchword;
                },error:function(){ 
                    window.location.href = 'search.html?q='+searchword;
                }
            })
            return;
        }
    }    
}



