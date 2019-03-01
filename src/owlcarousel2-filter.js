/**
 * OwlCarousel 2 - Filter
 * @author Bear
 * @version 1.0
 * 
 */

;( function( root, factory ) {

    if( typeof exports === "object" ) {
        module.exports = factory( root.jQuery )
    } else {
        root.owlcarousel2_filter = factory( root.jQuery );
    }
 
} ) ( window, function( $, args ) {

    'use strict';

    var OwlCarousel2_Filter = function( filter, $args ) {

        var owl = this;
        var owl_object = owl.data( 'owl.carousel' );
        var owl_settings = owl_object.settings;

        // Destroy OwlCarousel 
        owl.trigger( 'destroy.owl.carousel' );
        
        // Clone
        if( ! owl.oc2_filter_clone )
            owl.oc2_filter_clone = owl.clone()
        
        // Filter elements and clone
        var clone_filter_items = owl.oc2_filter_clone.children( filter ).clone();

        // Put filter items and re-call OwlCarousel
        owl.empty().append( clone_filter_items ).owlCarousel( owl_settings )
    }

    $.fn.owlcarousel2_filter = OwlCarousel2_Filter;

} )