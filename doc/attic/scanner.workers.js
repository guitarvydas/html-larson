
let  count_counter =  0;                               /* line 1 */
let  count_direction =  1;                             /* line 2 *//* line 3 */
function count_handler (eh,msg) {                      /* line 4 *//* line 5 */
    if ( msg.port ==  "adv") {                         /* line 6 */
      count_counter =  count_counter+ count_direction; /* line 7 */
      send_int ( eh, "", count_counter, msg)           /* line 8 */
    }
    else if ( msg.port ==  "rev") {                    /* line 9 */
      count_direction = (- count_direction)            /* line 10 */;/* line 11 */
    }                                                  /* line 12 *//* line 13 */
}

function count_instantiator (reg,owner,name,template_data) {/* line 14 */
    let name_with_id = gensymbol ( "Count")            /* line 15 */;
    return make_leaf ( name_with_id, owner, null, count_handler)/* line 16 */;/* line 17 *//* line 18 */
}

function count_install (reg) {                         /* line 19 */
    register_component ( reg,mkTemplate ( "Count", null, count_instantiator))/* line 20 *//* line 21 */
}

function monitor_install (reg) {                       /* line 1 */
    register_component ( reg,mkTemplate ( "@", null, monitor_instantiator))/* line 2 *//* line 3 *//* line 4 */
}

function monitor_instantiator (reg,owner,name,template_data) {/* line 5 */
    let name_with_id = gensymbol ( "@")                /* line 6 */;
    return make_leaf ( name_with_id, owner, null, monitor_handler)/* line 7 */;/* line 8 *//* line 9 */
}

function monitor_handler (eh,msg) {                    /* line 10 */
    if (( msg.port ==  "reset")) {                     /* line 11 */
      let  i = Number ( msg.datum.v)                   /* line 12 */;
      turn_off ( i, msg.datum.v)                       /* line 13 */
    }
    else {                                             /* line 14 */
      let  i = Number ( msg.datum.v)                   /* line 15 */;
      turn_on ( i, msg.datum.v)                        /* line 16 *//* line 17 */
    }                                                  /* line 18 *//* line 19 */
}

function decode_install (reg) {                        /* line 1 */
    register_component ( reg,mkTemplate ( "Decode", null, decode_instantiator))/* line 2 *//* line 3 *//* line 4 */
}

function decode_handler (eh,msg) {                     /* line 5 *//* line 6 */
    let s =  msg.datum.v;                              /* line 7 */
    let  i = Number ( s)                               /* line 8 */;
    if ((( i >=  0) && ( i <=  9))) {                  /* line 9 */
      send_string ( eh, s, s, msg)                     /* line 10 *//* line 11 */
    }
    send_bang ( eh, "done", msg)                       /* line 12 *//* line 13 *//* line 14 */
}

function decode_instantiator (reg,owner,name,template_data) {/* line 15 */
    let name_with_id = gensymbol ( "Decode")           /* line 16 */;
    return make_leaf ( name_with_id, owner, null, decode_handler)/* line 17 */;
}

function reverser_install (reg) {                      /* line 1 */
    register_component ( reg,mkTemplate ( "Reverser", null, reverser_instantiator))/* line 2 *//* line 3 *//* line 4 */
}

let  reverser_state =  "J";                            /* line 5 *//* line 6 */
function reverser_handler (eh,msg) {                   /* line 7 *//* line 8 */
    if ( reverser_state ==  "K") {                     /* line 9 */
      if ( msg.port ==  "J") {                         /* line 10 */
        send_bang ( eh, "", msg)                       /* line 11 */
        reverser_state =  "J";                         /* line 12 */
      }
      else {                                           /* line 13 *//* line 14 *//* line 15 */
      }
    }
    else if ( reverser_state ==  "J") {                /* line 16 */
      if ( msg.port ==  "K") {                         /* line 17 */
        send_bang ( eh, "", msg)                       /* line 18 */
        reverser_state =  "K";                         /* line 19 */
      }
      else {                                           /* line 20 *//* line 21 *//* line 22 */
      }                                                /* line 23 */
    }                                                  /* line 24 *//* line 25 */
}

function reverser_instantiator (reg,owner,name,template_data) {/* line 26 */
    let name_with_id = gensymbol ( "Reverser")         /* line 27 */;
    return make_leaf ( name_with_id, owner, null, reverser_handler)/* line 28 */;/* line 29 */
}

function divider_install (reg) {                       /* line 1 */
    register_component ( reg,mkTemplate ( "Divider", null, divider_instantiator))/* line 2 *//* line 3 *//* line 4 */
}

class Divider_Info {
  constructor () {                                     /* line 5 */

    this.counter =  0;                                 /* line 6 *//* line 7 */
  }
}
                                                       /* line 8 */
function divider_instantiator (reg,owner,name,template_data) {/* line 9 */
    let name_with_id = gensymbol ( "divider")          /* line 10 */;
    let info =  new Divider_Info ();                   /* line 11 */;
    return make_leaf ( name_with_id, owner, info, divider_handler)/* line 12 */;/* line 13 *//* line 14 */
}

let  DIVIDERCOUNT =  5;                                /* line 15 *//* line 16 */
function first_time (m) {                              /* line 17 */
    return (! is_tick ( m)                             /* line 18 */);/* line 19 *//* line 20 */
}

function divider_handler (eh,msg) {                    /* line 21 */
    let info =  eh.instance_data;                      /* line 22 */
    if ( info.counter >=  DIVIDERCOUNT) {              /* line 23 */
      send_string ( eh, "", "", msg)                   /* line 24 */
      info.counter =  0;                               /* line 25 */
    }
    else {                                             /* line 26 */
      info.counter =  info.counter+ 1;                 /* line 27 *//* line 28 */
    }                                                  /* line 29 *//* line 30 */
}

function disable_install (reg) {                       /* line 1 */
    register_component ( reg,mkTemplate ( "Disable", null, disable_instantiator))/* line 2 *//* line 3 *//* line 4 */
}

function disable_handler (eh,msg) {                    /* line 5 */
    let s =  msg.datum.v;                              /* line 6 */
    let  i =  0;                                       /* line 7 */
    while (( i <  10)) {                               /* line 8 */
      send_int ( eh,`${ i}`,`${ i}`, msg)              /* line 9 */
      i =  i+ 1;                                       /* line 10 *//* line 11 */
    }                                                  /* line 12 *//* line 13 */
}

function disable_instantiator (reg,owner,name,template_data) {/* line 14 */
    let name_with_id = gensymbol ( "Disable")          /* line 15 */;
    return make_leaf ( name_with_id, owner, null, disable_handler)/* line 16 */;
}

function main () {                                     /* line 1 */
    console.log ( "" +  "reset")                       /* line 2 */
    console.log ( "Info" +  "SCANNER begin")           /* line 3 */
    let  palette =  null;                              /* line 4 */
    let  env =  null;                                  /* line 5 */
    [ palette, env] = initialize_from_string ( ".")    /* line 6 */;/* line 7 */
    /*  install Worker parts  */                       /* line 8 */
    count_install ( palette)                           /* line 9 */
    monitor_install ( palette)                         /* line 10 */
    decode_install ( palette)                          /* line 11 */
    reverser_install ( palette)                        /* line 12 */
    divider_install ( palette)                         /* line 13 */
    disable_install ( palette)                         /* line 14 *//* line 15 */
    start ( "", "main", palette, env)                  /* line 16 */
    console.log ( "Info" +  "SCANNER end")             /* line 17 *//* line 18 */
}

/*  intentionally left empty  */
