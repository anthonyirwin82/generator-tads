#charset "us-ascii"
#include <tads.h>
#include "advlite.h"

versionInfo: GameID
    IFID = '<%- ifid %>' // obtain IFID from http://www.tads.org/ifidgen/ifidgen
    name = '<%- title %>'
    byline = 'by <%- author %>'
    htmlByline = 'by <a href="mailto:<%- email %>"><%- author %></a>'
    version = '1'
    authorEmail = '<%- author %> <%- email %>'
    desc = '<%- desc %>'
    htmlDesc = '<%- htmldesc %>'
;

gameMain: GameMainDef
    /* Define the initial player character; this is compulsory */
    initialPlayerChar = me
;


/* The starting location; this can be called anything you like */

startroom: Room 'The Starting Location'
    "Add your description here. "
;

/* 
 *   The player character object. This doesn't have to be called me, but me is a
 *   convenient name. If you change it to something else, rememember to change
 *   gameMain.initialPlayerChar accordingly.
 */

+ me: Thing 'you'   
    isFixed = true       
    person = 2  // change to 1 for a first-person game
    contType = Carrier    
;