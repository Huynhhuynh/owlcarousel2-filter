# OwlCarousel 2 - Filter

[Demo](https://huynhhuynh.github.io/owlcarousel2-filter/)

#### Setup demo

```
git clone git@github.com:Huynhhuynh/owlcarousel2-filter.git
cd owlcarousel2-filter
npm install
npm start
```

#### Html
```html
<nav class="owl-filter-bar">
    <a href="#" class="item" data-owl-filter="*">All</a>
    <a href="#" class="item" data-owl-filter=".red">Red</a>
    <a href="#" class="item" data-owl-filter=".blue">Blue</a>
</nav>

<div class="owl-carousel owl-theme">
    <div class="item red"><h4>1</h4></div>
    <div class="item red"><h4>2</h4></div>
    <div class="item blue"><h4>3</h4></div>
    <div class="item"><h4>4</h4></div>
    <div class="item"><h4>5</h4></div>
    <div class="item red"><h4>6</h4></div>
    <div class="item"><h4>7</h4></div>
    <div class="item"><h4>8</h4></div>
    <div class="item blue"><h4>9</h4></div>
    <div class="item"><h4>10</h4></div>
    <div class="item blue"><h4>11</h4></div>
    <div class="item"><h4>12</h4></div>
</div>
```
#### OwlCarousel 2 - Init
```javascript
var owl = $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
```

#### OwlCarousel 2 - Filter
```javascript
// owl.owlcarousel2_filter( '.blue' );

$( '.owl-filter-bar' ).on( 'click', '.item', function() {

    var $item = $(this);
    var filter = $item.data( 'owl-filter' )

    $item.addClass( 'current' ).siblings().removeClass( 'current' );

    owl.owlcarousel2_filter( filter );

} )
```

```
1.1
- Fix issue responsive not work

First released
```