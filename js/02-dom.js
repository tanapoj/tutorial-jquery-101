
$.fn.markIt = function () {
    $(this).addClass('mark')
    return $(this)
}
$.fn.unmarkIt = function () {
    $(this).removeClass('mark')
    return $(this)
}

$.fn.extend({
    getPseudo: function (pseudo, prop) {
        var props = window.getComputedStyle(
            $(this).get(0), pseudo
        ).getPropertyValue(prop);
        return String(props);
    },
    setPseudo: function (_pseudo, _prop, newprop) {
        var elem = $(this);
        var s = $("style");
        var p = elem.getPseudo(_pseudo, _prop);
        var r = p !== "" ? new RegExp(p) : false;
        var selector = $.map(elem, function (val, key) {
            return [val.tagName
                , val.id
                    ? "#" + val.id : null
                , val.className ? "." + val.className : null]
        });
        var _setProp = "\n" + selector.join("")
            .toLowerCase()
            .concat(_pseudo)
            .concat("{")
            .concat(_prop + ":")
            .concat(newprop + "};");
        return ((!!r ? r.test($(s).text()) : r)
                ? $(s).text(function (index, prop) {
                    return prop.replace(r, newprop)
                })
                : $(s).append(_setProp)
        );
    }
})

$(function () {
    $('body *').toArray().forEach(e => {
        let c = $(e).attr('class')
        if (typeof c === 'undefined') return
        console.log({c}, $(e).getPseudo(":before", "content"))
    })

    // $('div li').on('click', function (event) {
    //     console.log(this, $(this)[0], event.target, this === event.target)
    // })
})
