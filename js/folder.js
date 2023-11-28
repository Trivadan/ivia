(function($) {
    "use strict";

/*----------Folder And Files Icons---------------|START---------*/
$('.big-file-manager.theme-structure ul > li > b').contents().filter(function() {
    return this.nodeType == 3 && $.trim(this.textContent) != '';
}).wrap('<span autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" contenteditable="false" class="name" />');
function filesAndFolderIcons(newData) {
    function letGoSmallA(a) {
        var getType = $(a).attr('data-file-icon');
        if (getType == "folder") {
            $(a).children('b').prepend('<i class="fas fa-folder"></i>');
        } else if (getType == "html" || getType == "css" || getType == "js" || getType == "php") {
            $(a).children('b').prepend('<i class="fas fa-file"></i>');
        } else if (getType == "layout") {
            $(a).children('b').prepend('<i class="fas fa-th-large"></i>');
        } else if (getType == "image") {
            $(a).children('b').prepend('<i class="far fa-images"></i>');
        } else if (getType == "video") {
            $(a).children('b').prepend('<i class="fas fa-video"></i>');
        }
    }
    if (newData == "newData") {
        $('[data-new="new"][data-file-icon]').each(function() {
            letGoSmallA(this);
        });
    } else {
        $('[data-file-icon]').each(function() {
            letGoSmallA(this);
        });
    }
}
filesAndFolderIcons();
/*----------Folder And Files Icons---------------|END-------*/

/*----------Folder Default Behaviour----------|START------*/
$('.big-file-manager > ul').addClass('active-folder-wrapper');
$('.big-file-manager').addClass('small');
function allStructure(newData) {
  function letGoSmallB(){
    $('.big-file-manager ul li[data-file-icon="folder"]:not(:has(ul))').addClass('empty-folder');
    $('.empty-folder').each(function(){
      $(this).find('.no-item-inside-folder').remove();
      $(this).append('<ul class="no-item-inside-folder"><span>This folder has no items.</span></ul>');
    });
    $('.big-file-manager ul li:has(ul)').addClass('has-files-of-folder');
    $('.has-files-of-folder').each(function(){
      $(this).find('.cm-folder-back').remove();
      $(this).children('b').prepend('<i title="Back" class="cm-folder-back"><i class="fas fa-angle-left"></i></i>');
    });
    
    
    //$('.big-file-manager ul > li.has-files-of-folder > b').prepend('<i title="Back" class="cm-folder-back"><i class="fas fa-angle-left"></i></i>');
  }
  if (newData == "newData") {
        letGoSmallB();
    } else {
        letGoSmallB();
    }
}
allStructure();
$(document).on('dblclick', '.big-file-manager ul li.has-files-of-folder', function(e) {
    $('.big-file-manager ul').removeClass('active-folder-wrapper');
    $(this).children('ul').addClass('active-folder-wrapper');
    $(this).siblings('li').hide();
    $(this).addClass('file-sub-active').children('ul').show();
});
$(document).on('dblclick', '.big-file-manager ul li.has-files-of-folder', function(e) {
    $('.has-files-of-folder').removeClass('show-up').addClass('hide-up');
    $(this).addClass('show-up').removeClass('hide-up');
});
$(document).on('dblclick', '.big-file-manager ul li', function(e) {
    e.stopPropagation();
});
$(document).on('click', '.cm-folder-back', function(e) {
    e.stopPropagation();
    $('.big-file-manager ul').removeClass('active-folder-wrapper');
    $(this).parent('b').closest('ul').addClass('active-folder-wrapper');
    $(this).closest('.file-sub-active').siblings('li').show();
    $(this).closest('.file-sub-active').removeClass('file-sub-active');
    $(this).closest('.has-files-of-folder').find('ul').hide();
    $('.has-files-of-folder').removeClass('show-up').addClass('hide-up');
    $(this).closest('.file-sub-active').addClass('show-up').removeClass('hide-up');
    $(this).parent('b').next('ul').children('li').removeClass('select');
});
$(document).on('dblclick click','.big-file-manager ul li,.cm-folder-back',function(e) {
    var text = $('.show-up[data-file-icon]').attr('data-path');
  if(text){
    if(text.indexOf("/")){
      $('.address-search-input').val(text);
      var getAddressData = text.toString().split('/');
      $('.address-short-btn').empty();
      for(var i=0;i<getAddressData.length;i++){
        $('.address-short-btn').append('<div data-address><span>'+getAddressData[i]+'</span><i class="fas fa-caret-right"></i></div>');
      }
      var getSearchPlaceholder = $('.big-file-manager.theme-structure ul > li.show-up > b').text();
      $('.files-search-input').attr('placeholder','Search in '+getSearchPlaceholder);
    }else{
      $('.address-short-btn').empty();
      $('.address-short-btn').append('<div data-address><span>'+text+'</span></div>');
      $('.files-search-input').attr('placeholder','Search..');
    }
  }else{
    $('.address-short-btn').empty();
    $('.address-search-input').val('');
    $('.files-search-input').attr('placeholder','Search..');
    return false;
  }
});
/*----------Folder Default Behaviour----------|END------*/

/*---------Context Menu Start------------|START---------*/
$(document).on('contextmenu', '[data-file-icon]:not(.show-up)', function(e) {
    var off = $(this).offset();
    var topPos = e.pageY;
    var leftPos = e.pageX;
    $('.append-option-box').remove();
    $(this).addClass('context-visible').addClass('select');
    $(this).append('<div class="append-option-box" style="top:' + topPos + 'px;left:' + leftPos + 'px;"><div class="inner-contenxt-box"><div data-open="data-move">Open</div><div data-function="data-copy">Copy</div> <div data-function="data-move">Move</div> <div data-function="data-rename">Rename</div> <div data-function="data-delete">Delete</div> <div class="">Share</div> <div data-function="data-properties">Properties</div></div></div>');
    $('.append-option-box>div>div:has(div)').addClass('has-sub-context');
    if ($(this).attr('data-file-icon') != "folder") {
        $('.append-option-box .inner-contenxt-box').append('<div data-function="data-copy-path">Copy Path</div>');
        $('.append-option-box .inner-contenxt-box').append('<div data-function="data-copy-secure-path">Copy Secure Path</div>');
    }
    return false;
});

function pasteData() {
    $('.data-moving').each(function() {
        if ($('.active-folder-wrapper:has(.no-item-inside-folder)')) {
            $('.active-folder-wrapper.no-item-inside-folder').children('span').remove();
            $('.active-folder-wrapper.no-item-inside-folder').removeClass('no-item-inside-folder');
            $(this).clone().removeClass('data-copy').appendTo('.active-folder-wrapper');
            $('.active-folder-wrapper').find('li').show();
            $('.data-moving,.data-copy').removeClass('data-moving').removeClass('data-copy');
            $(this).remove();
        } else {
            $(this).clone().removeClass('data-copy').appendTo('.active-folder-wrapper');
            $('.data-moving,.data-copy').removeClass('data-moving').removeClass('data-copy');
            $(this).remove();
        }
    });
    $('.data-copy').each(function() {
        if ($('.active-folder-wrapper:has(.no-item-inside-folder)')) {
            $('.active-folder-wrapper.no-item-inside-folder').children('span').remove();
            $('.active-folder-wrapper.no-item-inside-folder').removeClass('no-item-inside-folder');
            $(this).clone().removeClass('data-copy').appendTo('.active-folder-wrapper');
            $('.active-folder-wrapper').find('li').show();
            $('.data-moving,.data-copy').removeClass('data-moving').removeClass('data-copy');
        } else {
            $(this).clone().removeClass('data-copy').appendTo('.active-folder-wrapper');
            $('.data-moving,.data-copy').removeClass('data-moving').removeClass('data-copy');
        }
    });
}

function deleteData() {
    var r = confirm("Are you Sure To Delete.");
    if (r == true) {
        $('.select').remove();
        return false;
    } else {
        return false;
    }
}
function renameData(renameClass) {
    $('.renaming').removeClass('renaming');
    $(renameClass).closest('li').addClass('renaming');
    $(renameClass).closest('li').find('.name').attr('contenteditable', true).select().focus();
    $('.renaming').removeClass('select');
}
$(window).on('keydown', function(ev) {
    if (ev.keyCode === 39) { /*left arrow*/
        $('.select').next('[data-file-icon]').addClass('select').siblings().removeClass('select');
    } else if (ev.keyCode === 37) { /*right arrow*/
        $('.select').prev('[data-file-icon]').addClass('select').siblings().removeClass('select');
    } else if (ev.keyCode === 13) { /*enter*/
        $('.select:not(:last)').each(function() {
            $(this).removeClass('select');
        });
        $('.select').dblclick();
    } else if (ev.ctrlKey && ev.keyCode === 88) { /*move*/
        $('.data-moving,.data-copy').removeClass('data-moving').removeClass('data-copy');
        $('.select').addClass('data-moving').removeClass('data-copy');
        return false;
    } else if (ev.ctrlKey && ev.keyCode === 67) { /*copy*/
        $('.data-moving,.data-copy').removeClass('data-moving').removeClass('data-copy');
        $('.select').addClass('data-copy').removeClass('data-moving');
        return false;
    } else if (ev.ctrlKey && ev.keyCode === 86) { /*paste*/
        pasteData();
        createFileAndFolderDataBase();
    } else if (ev.keyCode === 46) { /*delete*/
        deleteData();
    } else if (ev.keyCode === 27 || ev.keyCode === 8) { /*Back*/
        $('.big-file-manager.theme-structure ul > li.show-up > b > .cm-folder-back').click();
    } else if (ev.ctrlKey && ev.keyCode === 65) { /*Shift Select*/

    } else if (ev.keyCode === 113) { /*Rename*/
        renameData('.select');
    }
});


})(window.jQuery);