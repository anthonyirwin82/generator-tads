#charset "us-ascii"

/*
 *   Copyright (c) 1999, 2002 by Michael J. Roberts.  Permission is
 *   granted to anyone to copy and use this file for any purpose.  
 *   
 *   This is a starter TADS 3 source file.  This is a complete TADS game
 *   that you can compile and run.
 */

#include <adv3.h>
#include <en_us.h>

gameMain: GameMainDef
    initialPlayerChar = me
;

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

firstRoom: Room 'Starting Room'
    "Add your description here. "
;

+me: Actor
;