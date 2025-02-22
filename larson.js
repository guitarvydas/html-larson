const lnet =
  '[' +
  '  {' +
  '    "name": "main",' +
  '    "children": [' +
  '      {' +
  '        "name": "Larson",' +
  '        "id": 3' +
  '      },' +
  '      {' +
  '        "name": "Divider",' +
  '        "id": 6' +
  '      },' +
  '      {' +
  '        "name": "trash",' +
  '        "id": 9' +
  '      }' +
  '    ],' +
  '    "connections": [' +
  '      {' +
  '        "dir": 0,' +
  '        "source_port": "",' +
  '        "target_port": "",' +
  '        "target": {' +
  '          "name": "Divider",' +
  '          "id": 6' +
  '        }' +
  '      },' +
  '      {' +
  '        "dir": 1,' +
  '        "source_port": "",' +
  '        "target_port": "tick",' +
  '        "source": {' +
  '          "name": "Divider",' +
  '          "id": 6' +
  '        },' +
  '        "target": {' +
  '          "name": "Larson",' +
  '          "id": 3' +
  '        }' +
  '      },' +
  '      {' +
  '        "dir": 1,' +
  '        "source_port": "",' +
  '        "target_port": "",' +
  '        "source": {' +
  '          "name": "Larson",' +
  '          "id": 3' +
  '        },' +
  '        "target": {' +
  '          "name": "trash",' +
  '          "id": 9' +
  '        }' +
  '      }' +
  '    ]' +
  '  },' +
  '  {' +
  '    "name": "Larson",' +
  '    "children": [' +
  '      {' +
  '        "name": "Count",' +
  '        "id": 4' +
  '      },' +
  '      {' +
  '        "name": "Reverser",' +
  '        "id": 8' +
  '      },' +
  '      {' +
  '        "name": "Decode",' +
  '        "id": 12' +
  '      },' +
  '      {' +
  '        "name": "@",' +
  '        "id": 25' +
  '      },' +
  '      {' +
  '        "name": "@",' +
  '        "id": 28' +
  '      },' +
  '      {' +
  '        "name": "@",' +
  '        "id": 31' +
  '      },' +
  '      {' +
  '        "name": "@",' +
  '        "id": 34' +
  '      },' +
  '      {' +
  '        "name": "@",' +
  '        "id": 37' +
  '      },' +
  '      {' +
  '        "name": "@",' +
  '        "id": 40' +
  '      },' +
  '      {' +
  '        "name": "@",' +
  '        "id": 43' +
  '      },' +
  '      {' +
  '        "name": "@",' +
  '        "id": 46' +
  '      },' +
  '      {' +
  '        "name": "@",' +
  '        "id": 49' +
  '      },' +
  '      {' +
  '        "name": "@",' +
  '        "id": 52' +
  '      },' +
  '      {' +
  '        "name": "1then2",' +
  '        "id": 55' +
  '      },' +
  '      {' +
  '        "name": "Disable",' +
  '        "id": 60' +
  '      },' +
  '      {' +
  '        "name": "?A",' +
  '        "id": 72' +
  '      }' +
  '    ],' +
  '    "connections": [' +
  '      {' +
  '        "dir": 0,' +
  '        "source_port": "tick",' +
  '        "target_port": "adv",' +
  '        "target": {' +
  '          "name": "Count",' +
  '          "id": 4' +
  '        }' +
  '      },' +
  '      {' +
  '        "dir": 1,' +
  '        "source_port": "",' +
  '        "target_port": "rev",' +
  '        "source": {' +
  '          "name": "Reverser",' +
  '          "id": 8' +
  '        },' +
  '        "target": {' +
  '          "name": "Count",' +
  '          "id": 4' +
  '        }' +
  '      },' +
  '      {' +
  '        "dir": 1,' +
  '        "source_port": "2",' +
  '        "target_port": "N",' +
  '        "source": {' +
  '          "name": "1then2",' +
  '          "id": 55' +
  '        },' +
  '        "target": {' +
  '          "name": "Decode",' +
  '          "id": 12' +
  '        }' +
  '      },' +
  '      {' +
  '        "dir": 1,' +
  '        "source_port": "0",' +
  '        "target_port": "J",' +
  '        "source": {' +
  '          "name": "Decode",' +
  '          "id": 12' +
  '        },' +
  '        "target": {' +
  '          "name": "Reverser",' +
  '          "id": 8' +
  '        }' +
  '      },' +
  '      {' +
  '        "dir": 1,' +
  '        "source_port": "9",' +
  '        "target_port": "K",' +
  '        "source": {' +
  '          "name": "Decode",' +
  '          "id": 12' +
  '        },' +
  '        "target": {' +
  '          "name": "Reverser",' +
  '          "id": 8' +
  '        }' +
  '      },' +
  '      {' +
  '        "dir": 1,' +
  '        "source_port": "9",' +
  '        "target_port": "",' +
  '        "source": {' +
  '          "name": "Decode",' +
  '          "id": 12' +
  '        },' +
  '        "target": {' +
  '          "name": "@",' +
  '          "id": 25' +
  '        }' +
  '      },' +
  '      {' +
  '        "dir": 1,' +
  '        "source_port": "8",' +
  '        "target_port": "",' +
  '        "source": {' +
  '          "name": "Decode",' +
  '          "id": 12' +
  '        },' +
  '        "target": {' +
  '          "name": "@",' +
  '          "id": 28' +
  '        }' +
  '      },' +
  '      {' +
  '        "dir": 1,' +
  '        "source_port": "7",' +
  '        "target_port": "",' +
  '        "source": {' +
  '          "name": "Decode",' +
  '          "id": 12' +
  '        },' +
  '        "target": {' +
  '          "name": "@",' +
  '          "id": 31' +
  '        }' +
  '      },' +
  '      {' +
  '        "dir": 1,' +
  '        "source_port": "6",' +
  '        "target_port": "",' +
  '        "source": {' +
  '          "name": "Decode",' +
  '          "id": 12' +
  '        },' +
  '        "target": {' +
  '          "name": "@",' +
  '          "id": 34' +
  '        }' +
  '      },' +
  '      {' +
  '        "dir": 1,' +
  '        "source_port": "5",' +
  '        "target_port": "",' +
  '        "source": {' +
  '          "name": "Decode",' +
  '          "id": 12' +
  '        },' +
  '        "target": {' +
  '          "name": "@",' +
  '          "id": 37' +
  '        }' +
  '      },' +
  '      {' +
  '        "dir": 1,' +
  '        "source_port": "0",' +
  '        "target_port": "",' +
  '        "source": {' +
  '          "name": "Decode",' +
  '          "id": 12' +
  '        },' +
  '        "target": {' +
  '          "name": "@",' +
  '          "id": 40' +
  '        }' +
  '      },' +
  '      {' +
  '        "dir": 1,' +
  '        "source_port": "2",' +
  '        "target_port": "",' +
  '        "source": {' +
  '          "name": "Decode",' +
  '          "id": 12' +
  '        },' +
  '        "target": {' +
  '          "name": "@",' +
  '          "id": 46' +
  '        }' +
  '      },' +
  '      {' +
  '        "dir": 1,' +
  '        "source_port": "3",' +
  '        "target_port": "",' +
  '        "source": {' +
  '          "name": "Decode",' +
  '          "id": 12' +
  '        },' +
  '        "target": {' +
  '          "name": "@",' +
  '          "id": 49' +
  '        }' +
  '      },' +
  '      {' +
  '        "dir": 1,' +
  '        "source_port": "4",' +
  '        "target_port": "",' +
  '        "source": {' +
  '          "name": "Decode",' +
  '          "id": 12' +
  '        },' +
  '        "target": {' +
  '          "name": "@",' +
  '          "id": 52' +
  '        }' +
  '      },' +
  '      {' +
  '        "dir": 1,' +
  '        "source_port": "",' +
  '        "target_port": "1",' +
  '        "source": {' +
  '          "name": "Count",' +
  '          "id": 4' +
  '        },' +
  '        "target": {' +
  '          "name": "1then2",' +
  '          "id": 55' +
  '        }' +
  '      },' +
  '      {' +
  '        "dir": 1,' +
  '        "source_port": "",' +
  '        "target_port": "2",' +
  '        "source": {' +
  '          "name": "Count",' +
  '          "id": 4' +
  '        },' +
  '        "target": {' +
  '          "name": "1then2",' +
  '          "id": 55' +
  '        }' +
  '      },' +
  '      {' +
  '        "dir": 1,' +
  '        "source_port": "0",' +
  '        "target_port": "reset",' +
  '        "source": {' +
  '          "name": "Disable",' +
  '          "id": 60' +
  '        },' +
  '        "target": {' +
  '          "name": "@",' +
  '          "id": 40' +
  '        }' +
  '      },' +
  '      {' +
  '        "dir": 1,' +
  '        "source_port": "2",' +
  '        "target_port": "reset",' +
  '        "source": {' +
  '          "name": "Disable",' +
  '          "id": 60' +
  '        },' +
  '        "target": {' +
  '          "name": "@",' +
  '          "id": 46' +
  '        }' +
  '      },' +
  '      {' +
  '        "dir": 1,' +
  '        "source_port": "3",' +
  '        "target_port": "reset",' +
  '        "source": {' +
  '          "name": "Disable",' +
  '          "id": 60' +
  '        },' +
  '        "target": {' +
  '          "name": "@",' +
  '          "id": 49' +
  '        }' +
  '      },' +
  '      {' +
  '        "dir": 1,' +
  '        "source_port": "4",' +
  '        "target_port": "reset",' +
  '        "source": {' +
  '          "name": "Disable",' +
  '          "id": 60' +
  '        },' +
  '        "target": {' +
  '          "name": "@",' +
  '          "id": 52' +
  '        }' +
  '      },' +
  '      {' +
  '        "dir": 1,' +
  '        "source_port": "5",' +
  '        "target_port": "reset",' +
  '        "source": {' +
  '          "name": "Disable",' +
  '          "id": 60' +
  '        },' +
  '        "target": {' +
  '          "name": "@",' +
  '          "id": 37' +
  '        }' +
  '      },' +
  '      {' +
  '        "dir": 1,' +
  '        "source_port": "7",' +
  '        "target_port": "reset",' +
  '        "source": {' +
  '          "name": "Disable",' +
  '          "id": 60' +
  '        },' +
  '        "target": {' +
  '          "name": "@",' +
  '          "id": 31' +
  '        }' +
  '      },' +
  '      {' +
  '        "dir": 1,' +
  '        "source_port": "8",' +
  '        "target_port": "reset",' +
  '        "source": {' +
  '          "name": "Disable",' +
  '          "id": 60' +
  '        },' +
  '        "target": {' +
  '          "name": "@",' +
  '          "id": 28' +
  '        }' +
  '      },' +
  '      {' +
  '        "dir": 1,' +
  '        "source_port": "9",' +
  '        "target_port": "reset",' +
  '        "source": {' +
  '          "name": "Disable",' +
  '          "id": 60' +
  '        },' +
  '        "target": {' +
  '          "name": "@",' +
  '          "id": 25' +
  '        }' +
  '      },' +
  '      {' +
  '        "dir": 1,' +
  '        "source_port": "1",' +
  '        "target_port": "reset",' +
  '        "source": {' +
  '          "name": "Disable",' +
  '          "id": 60' +
  '        },' +
  '        "target": {' +
  '          "name": "@",' +
  '          "id": 43' +
  '        }' +
  '      },' +
  '      {' +
  '        "dir": 1,' +
  '        "source_port": "6",' +
  '        "target_port": "reset",' +
  '        "source": {' +
  '          "name": "Disable",' +
  '          "id": 60' +
  '        },' +
  '        "target": {' +
  '          "name": "@",' +
  '          "id": 34' +
  '        }' +
  '      },' +
  '      {' +
  '        "dir": 1,' +
  '        "source_port": "1",' +
  '        "target_port": "",' +
  '        "source": {' +
  '          "name": "Decode",' +
  '          "id": 12' +
  '        },' +
  '        "target": {' +
  '          "name": "@",' +
  '          "id": 43' +
  '        }' +
  '      },' +
  '      {' +
  '        "dir": 1,' +
  '        "source_port": "1",' +
  '        "target_port": "",' +
  '        "source": {' +
  '          "name": "1then2",' +
  '          "id": 55' +
  '        },' +
  '        "target": {' +
  '          "name": "Disable",' +
  '          "id": 60' +
  '        }' +
  '      },' +
  '      {' +
  '        "dir": 1,' +
  '        "source_port": "2",' +
  '        "target_port": "",' +
  '        "source": {' +
  '          "name": "1then2",' +
  '          "id": 55' +
  '        },' +
  '        "target": {' +
  '          "name": "?A",' +
  '          "id": 72' +
  '        }' +
  '      },' +
  '      {' +
  '        "dir": 2,' +
  '        "source_port": "done",' +
  '        "target_port": "",' +
  '        "source": {' +
  '          "name": "Decode",' +
  '          "id": 12' +
  '        }' +
  '      }' +
  '    ]' +
  '  }' +
  ']';

/* line 1 *//* line 2 */
let  counter =  0;                                     /* line 3 */
let  ticktime =  0;                                    /* line 4 */
let  main_container =  null;                           /* line 5 *//* line 6 */
let  digits = [ "₀", "₁", "₂", "₃", "₄", "₅", "₆", "₇", "₈", "₉", "₁₀", "₁₁", "₁₂", "₁₃", "₁₄", "₁₅", "₁₆", "₁₇", "₁₈", "₁₉", "₂₀", "₂₁", "₂₂", "₂₃", "₂₄", "₂₅", "₂₆", "₂₇", "₂₈", "₂₉"];/* line 13 *//* line 14 *//* line 15 */
function gensymbol (s) {                               /* line 16 *//* line 17 */
    let name_with_id =  ( s.toString ()+ subscripted_digit ( counter).toString ()) /* line 18 */;
    counter =  counter+ 1;                             /* line 19 */
    return  name_with_id;                              /* line 20 *//* line 21 *//* line 22 */
}

function subscripted_digit (n) {                       /* line 23 *//* line 24 */
    if (((( n >=  0) && ( n <=  29)))) {               /* line 25 */
      return  digits [ n];                             /* line 26 */
    }
    else {                                             /* line 27 */
      return  ( "₊".toString ()+ `${ n}`.toString ())  /* line 28 */;/* line 29 */
    }                                                  /* line 30 *//* line 31 */
}

class Datum {
  constructor () {                                     /* line 32 */

    this.v =  null;                                    /* line 33 */
    this.clone =  null;                                /* line 34 */
    this.reclaim =  null;                              /* line 35 */
    this.other =  null;/*  reserved for use on per-project basis  *//* line 36 *//* line 37 */
  }
}
                                                       /* line 38 */
function new_datum_string (s) {                        /* line 39 */
    let d =  new Datum ();                             /* line 40 */;
    d.v =  s;                                          /* line 41 */
    d.clone =  function () {return clone_datum_string ( d)/* line 42 */;};
    d.reclaim =  function () {return reclaim_datum_string ( d)/* line 43 */;};
    return  d;                                         /* line 44 *//* line 45 *//* line 46 */
}

function clone_datum_string (d) {                      /* line 47 */
    let newd = new_datum_string ( d.v)                 /* line 48 */;
    return  newd;                                      /* line 49 *//* line 50 *//* line 51 */
}

function reclaim_datum_string (src) {                  /* line 52 *//* line 53 *//* line 54 *//* line 55 */
}

function new_datum_bang () {                           /* line 56 */
    let p =  new Datum ();                             /* line 57 */;
    p.v =  "";                                         /* line 58 */
    p.clone =  function () {return clone_datum_bang ( p)/* line 59 */;};
    p.reclaim =  function () {return reclaim_datum_bang ( p)/* line 60 */;};
    return  p;                                         /* line 61 *//* line 62 *//* line 63 */
}

function clone_datum_bang (d) {                        /* line 64 */
    return new_datum_bang ();                          /* line 65 *//* line 66 *//* line 67 */
}

function reclaim_datum_bang (d) {                      /* line 68 *//* line 69 *//* line 70 *//* line 71 */
}

/*  Mevent passed to a leaf component. */              /* line 72 */
/*  */                                                 /* line 73 */
/*  `port` refers to the name of the incoming or outgoing port of this component. *//* line 74 */
/*  `payload` is the data attached to this mevent. */  /* line 75 */
class Mevent {
  constructor () {                                     /* line 76 */

    this.port =  null;                                 /* line 77 */
    this.datum =  null;                                /* line 78 *//* line 79 */
  }
}
                                                       /* line 80 */
function clone_port (s) {                              /* line 81 */
    return clone_string ( s)                           /* line 82 */;/* line 83 *//* line 84 */
}

/*  Utility for making a `Mevent`. Used to safely "seed“ mevents *//* line 85 */
/*  entering the very top of a network. */             /* line 86 */
function make_mevent (port,datum) {                    /* line 87 */
    let p = clone_string ( port)                       /* line 88 */;
    let  m =  new Mevent ();                           /* line 89 */;
    m.port =  p;                                       /* line 90 */
    m.datum =  datum.clone ();                         /* line 91 */
    return  m;                                         /* line 92 *//* line 93 *//* line 94 */
}

/*  Clones a mevent. Primarily used internally for “fanning out“ a mevent to multiple destinations. *//* line 95 */
function mevent_clone (mev) {                          /* line 96 */
    let  m =  new Mevent ();                           /* line 97 */;
    m.port = clone_port ( mev.port)                    /* line 98 */;
    m.datum =  mev.datum.clone ();                     /* line 99 */
    return  m;                                         /* line 100 *//* line 101 *//* line 102 */
}

/*  Frees a mevent. */                                 /* line 103 */
function destroy_mevent (mev) {                        /* line 104 */
    /*  during debug, dont destroy any mevent, since we want to trace mevents, thus, we need to persist ancestor mevents *//* line 105 *//* line 106 *//* line 107 *//* line 108 */
}

function destroy_datum (mev) {                         /* line 109 *//* line 110 *//* line 111 *//* line 112 */
}

function destroy_port (mev) {                          /* line 113 *//* line 114 *//* line 115 *//* line 116 */
}

/*  */                                                 /* line 117 */
function format_mevent (m) {                           /* line 118 */
    if ( m ==  null) {                                 /* line 119 */
      return  "{}";                                    /* line 120 */
    }
    else {                                             /* line 121 */
      return  ( "{%5C”".toString ()+  ( m.port.toString ()+  ( "%5C”:%5C”".toString ()+  ( m.datum.v.toString ()+  "%5C”}".toString ()) .toString ()) .toString ()) .toString ()) /* line 122 */;/* line 123 */
    }                                                  /* line 124 */
}

function format_mevent_raw (m) {                       /* line 125 */
    if ( m ==  null) {                                 /* line 126 */
      return  "";                                      /* line 127 */
    }
    else {                                             /* line 128 */
      return  m.datum.v;                               /* line 129 *//* line 130 */
    }                                                  /* line 131 *//* line 132 */
}

const  enumDown =  0                                   /* line 133 */;
const  enumAcross =  1                                 /* line 134 */;
const  enumUp =  2                                     /* line 135 */;
const  enumThrough =  3                                /* line 136 */;/* line 137 */
function create_down_connector (container,proto_conn,connectors,children_by_id) {/* line 138 */
    /*  JSON: {;dir': 0, 'source': {'name': '', 'id': 0}, 'source_port': '', 'target': {'name': 'Echo', 'id': 12}, 'target_port': ''}, *//* line 139 */
    let  connector =  new Connector ();                /* line 140 */;
    connector.direction =  "down";                     /* line 141 */
    connector.sender = mkSender ( container.name, container, proto_conn [ "source_port"])/* line 142 */;
    let target_proto =  proto_conn [ "target"];        /* line 143 */
    let id_proto =  target_proto [ "id"];              /* line 144 */
    let target_component =  children_by_id [id_proto]; /* line 145 */
    if (( target_component ==  null)) {                /* line 146 */
      load_error ( ( "internal error: .Down connection target internal error ".toString ()+ ( proto_conn [ "target"]) [ "name"].toString ()) )/* line 147 */
    }
    else {                                             /* line 148 */
      connector.receiver = mkReceiver ( target_component.name, target_component, proto_conn [ "target_port"], target_component.inq)/* line 149 */;/* line 150 */
    }
    return  connector;                                 /* line 151 *//* line 152 *//* line 153 */
}

function create_across_connector (container,proto_conn,connectors,children_by_id) {/* line 154 */
    let  connector =  new Connector ();                /* line 155 */;
    connector.direction =  "across";                   /* line 156 */
    let source_component =  children_by_id [(( proto_conn [ "source"]) [ "id"])];/* line 157 */
    let target_component =  children_by_id [(( proto_conn [ "target"]) [ "id"])];/* line 158 */
    if ( source_component ==  null) {                  /* line 159 */
      load_error ( ( "internal error: .Across connection source not ok ".toString ()+ ( proto_conn [ "source"]) [ "name"].toString ()) )/* line 160 */
    }
    else {                                             /* line 161 */
      connector.sender = mkSender ( source_component.name, source_component, proto_conn [ "source_port"])/* line 162 */;
      if ( target_component ==  null) {                /* line 163 */
        load_error ( ( "internal error: .Across connection target not ok ".toString ()+ ( proto_conn [ "target"]) [ "name"].toString ()) )/* line 164 */
      }
      else {                                           /* line 165 */
        connector.receiver = mkReceiver ( target_component.name, target_component, proto_conn [ "target_port"], target_component.inq)/* line 166 */;/* line 167 */
      }                                                /* line 168 */
    }
    return  connector;                                 /* line 169 *//* line 170 *//* line 171 */
}

function create_up_connector (container,proto_conn,connectors,children_by_id) {/* line 172 */
    let  connector =  new Connector ();                /* line 173 */;
    connector.direction =  "up";                       /* line 174 */
    let source_component =  children_by_id [(( proto_conn [ "source"]) [ "id"])];/* line 175 */
    if ( source_component ==  null) {                  /* line 176 */
      load_error ( ( "internal error: .Up connection source not ok ".toString ()+ ( proto_conn [ "source"]) [ "name"].toString ()) )/* line 177 */
    }
    else {                                             /* line 178 */
      connector.sender = mkSender ( source_component.name, source_component, proto_conn [ "source_port"])/* line 179 */;
      connector.receiver = mkReceiver ( container.name, container, proto_conn [ "target_port"], container.outq)/* line 180 */;/* line 181 */
    }
    return  connector;                                 /* line 182 *//* line 183 *//* line 184 */
}

function create_through_connector (container,proto_conn,connectors,children_by_id) {/* line 185 */
    let  connector =  new Connector ();                /* line 186 */;
    connector.direction =  "through";                  /* line 187 */
    connector.sender = mkSender ( container.name, container, proto_conn [ "source_port"])/* line 188 */;
    connector.receiver = mkReceiver ( container.name, container, proto_conn [ "target_port"], container.outq)/* line 189 */;
    return  connector;                                 /* line 190 *//* line 191 *//* line 192 */
}
                                                       /* line 193 */
function container_instantiator (reg,owner,container_name,desc) {/* line 194 *//* line 195 */
    let container = make_container ( container_name, owner)/* line 196 */;
    let children = [];                                 /* line 197 */
    let children_by_id = {};
    /*  not strictly necessary, but, we can remove 1 runtime lookup by “compiling it out“ here *//* line 198 */
    /*  collect children */                            /* line 199 */
    for (let child_desc of  desc [ "children"]) {      /* line 200 */
      let child_instance = get_component_instance ( reg, child_desc [ "name"], container)/* line 201 */;
      children.push ( child_instance)                  /* line 202 */
      let id =  child_desc [ "id"];                    /* line 203 */
      children_by_id [id] =  child_instance;           /* line 204 *//* line 205 *//* line 206 */
    }
    container.children =  children;                    /* line 207 *//* line 208 */
    let connectors = [];                               /* line 209 */
    for (let proto_conn of  desc [ "connections"]) {   /* line 210 */
      let  connector =  new Connector ();              /* line 211 */;
      if ( proto_conn [ "dir"] ==  enumDown) {         /* line 212 */
        connectors.push (create_down_connector ( container, proto_conn, connectors, children_by_id)) /* line 213 */
      }
      else if ( proto_conn [ "dir"] ==  enumAcross) {  /* line 214 */
        connectors.push (create_across_connector ( container, proto_conn, connectors, children_by_id)) /* line 215 */
      }
      else if ( proto_conn [ "dir"] ==  enumUp) {      /* line 216 */
        connectors.push (create_up_connector ( container, proto_conn, connectors, children_by_id)) /* line 217 */
      }
      else if ( proto_conn [ "dir"] ==  enumThrough) { /* line 218 */
        connectors.push (create_through_connector ( container, proto_conn, connectors, children_by_id)) /* line 219 *//* line 220 */
      }                                                /* line 221 */
    }
    container.connections =  connectors;               /* line 222 */
    return  container;                                 /* line 223 *//* line 224 *//* line 225 */
}

/*  The default handler for container components. */   /* line 226 */
function container_handler (container,mevent) {        /* line 227 */
    route ( container, container, mevent)
    /*  references to 'self' are replaced by the container during instantiation *//* line 228 */
    while (any_child_ready ( container)) {             /* line 229 */
      step_children ( container, mevent)               /* line 230 */
    }                                                  /* line 231 *//* line 232 */
}

/*  Frees the given container and associated data. */  /* line 233 */
function destroy_container (eh) {                      /* line 234 *//* line 235 *//* line 236 *//* line 237 */
}

/*  Routing connection for a container component. The `direction` field has *//* line 238 */
/*  no affect on the default mevent routing system _ it is there for debugging *//* line 239 */
/*  purposes, or for reading by other tools. */        /* line 240 *//* line 241 */
class Connector {
  constructor () {                                     /* line 242 */

    this.direction =  null;/*  down, across, up, through *//* line 243 */
    this.sender =  null;                               /* line 244 */
    this.receiver =  null;                             /* line 245 *//* line 246 */
  }
}
                                                       /* line 247 */
/*  `Sender` is used to “pattern match“ which `Receiver` a mevent should go to, *//* line 248 */
/*  based on component ID (pointer) and port name. */  /* line 249 *//* line 250 */
class Sender {
  constructor () {                                     /* line 251 */

    this.name =  null;                                 /* line 252 */
    this.component =  null;                            /* line 253 */
    this.port =  null;                                 /* line 254 *//* line 255 */
  }
}
                                                       /* line 256 *//* line 257 *//* line 258 */
/*  `Receiver` is a handle to a destination queue, and a `port` name to assign *//* line 259 */
/*  to incoming mevents to this queue. */              /* line 260 *//* line 261 */
class Receiver {
  constructor () {                                     /* line 262 */

    this.name =  null;                                 /* line 263 */
    this.queue =  null;                                /* line 264 */
    this.port =  null;                                 /* line 265 */
    this.component =  null;                            /* line 266 *//* line 267 */
  }
}
                                                       /* line 268 */
function mkSender (name,component,port) {              /* line 269 */
    let  s =  new Sender ();                           /* line 270 */;
    s.name =  name;                                    /* line 271 */
    s.component =  component;                          /* line 272 */
    s.port =  port;                                    /* line 273 */
    return  s;                                         /* line 274 *//* line 275 *//* line 276 */
}

function mkReceiver (name,component,port,q) {          /* line 277 */
    let  r =  new Receiver ();                         /* line 278 */;
    r.name =  name;                                    /* line 279 */
    r.component =  component;                          /* line 280 */
    r.port =  port;                                    /* line 281 */
    /*  We need a way to determine which queue to target. "Down" and "Across" go to inq, "Up" and "Through" go to outq. *//* line 282 */
    r.queue =  q;                                      /* line 283 */
    return  r;                                         /* line 284 *//* line 285 *//* line 286 */
}

/*  Checks if two senders match, by pointer equality and port name matching. *//* line 287 */
function sender_eq (s1,s2) {                           /* line 288 */
    let same_components = ( s1.component ==  s2.component);/* line 289 */
    let same_ports = ( s1.port ==  s2.port);           /* line 290 */
    return (( same_components) && ( same_ports));      /* line 291 *//* line 292 *//* line 293 */
}

/*  Delivers the given mevent to the receiver of this connector. *//* line 294 *//* line 295 */
function deposit (parent,conn,mevent) {                /* line 296 */
    let new_mevent = make_mevent ( conn.receiver.port, mevent.datum)/* line 297 */;
    push_mevent ( parent, conn.receiver.component, conn.receiver.queue, new_mevent)/* line 298 *//* line 299 *//* line 300 */
}

function force_tick (parent,eh) {                      /* line 301 */
    let tick_mev = make_mevent ( ".",new_datum_bang ())/* line 302 */;
    push_mevent ( parent, eh, eh.inq, tick_mev)        /* line 303 */
    return  tick_mev;                                  /* line 304 *//* line 305 *//* line 306 */
}

function push_mevent (parent,receiver,inq,m) {         /* line 307 */
    inq.push ( m)                                      /* line 308 */
    parent.visit_ordering.push ( receiver)             /* line 309 *//* line 310 *//* line 311 */
}

function is_self (child,container) {                   /* line 312 */
    /*  in an earlier version “self“ was denoted as ϕ *//* line 313 */
    return  child ==  container;                       /* line 314 *//* line 315 *//* line 316 */
}

function step_child (child,mev) {                      /* line 317 */
    let before_state =  child.state;                   /* line 318 */
    child.handler ( child, mev)                        /* line 319 */
    let after_state =  child.state;                    /* line 320 */
    return [(( before_state ==  "idle") && ( after_state!= "idle")),(( before_state!= "idle") && ( after_state!= "idle")),(( before_state!= "idle") && ( after_state ==  "idle"))];/* line 323 *//* line 324 *//* line 325 */
}

function step_children (container,causingMevent) {     /* line 326 */
    container.state =  "idle";                         /* line 327 */
    for (let child of   container.visit_ordering) {    /* line 328 */
      /*  child = container represents self, skip it *//* line 329 */
      if (((! (is_self ( child, container))))) {       /* line 330 */
        if (((! ((0=== child.inq.length))))) {         /* line 331 */
          let mev =  child.inq.shift ()                /* line 332 */;
          let  began_long_run =  null;                 /* line 333 */
          let  continued_long_run =  null;             /* line 334 */
          let  ended_long_run =  null;                 /* line 335 */
          [ began_long_run, continued_long_run, ended_long_run] = step_child ( child, mev)/* line 336 */;
          if ( began_long_run) {                       /* line 337 *//* line 338 */
          }
          else if ( continued_long_run) {              /* line 339 *//* line 340 */
          }
          else if ( ended_long_run) {                  /* line 341 *//* line 342 *//* line 343 */
          }
          destroy_mevent ( mev)                        /* line 344 */
        }
        else {                                         /* line 345 */
          if ( child.state!= "idle") {                 /* line 346 */
            let mev = force_tick ( container, child)   /* line 347 */;
            child.handler ( child, mev)                /* line 348 */
            destroy_mevent ( mev)                      /* line 349 *//* line 350 */
          }                                            /* line 351 */
        }                                              /* line 352 */
        if ( child.state ==  "active") {               /* line 353 */
          /*  if child remains active, then the container must remain active and must propagate “ticks“ to child *//* line 354 */
          container.state =  "active";                 /* line 355 *//* line 356 */
        }                                              /* line 357 */
        while (((! ((0=== child.outq.length))))) {     /* line 358 */
          let mev =  child.outq.shift ()               /* line 359 */;
          route ( container, child, mev)               /* line 360 */
          destroy_mevent ( mev)                        /* line 361 *//* line 362 */
        }                                              /* line 363 */
      }                                                /* line 364 */
    }                                                  /* line 365 *//* line 366 */
}

function attempt_tick (parent,eh) {                    /* line 367 */
    if ( eh.state!= "idle") {                          /* line 368 */
      force_tick ( parent, eh)                         /* line 369 *//* line 370 */
    }                                                  /* line 371 *//* line 372 */
}

function is_tick (mev) {                               /* line 373 */
    return  "." ==  mev.port
    /*  assume that any mevent that is sent to port "." is a tick  *//* line 374 */;/* line 375 *//* line 376 */
}

/*  Routes a single mevent to all matching destinations, according to *//* line 377 */
/*  the container's connection network. */             /* line 378 *//* line 379 */
function route (container,from_component,mevent) {     /* line 380 */
    let  was_sent =  false;
    /*  for checking that output went somewhere (at least during bootstrap) *//* line 381 */
    let  fromname =  "";                               /* line 382 *//* line 383 */
    ticktime =  ticktime+ 1;                           /* line 384 */
    if (is_tick ( mevent)) {                           /* line 385 */
      for (let child of  container.children) {         /* line 386 */
        attempt_tick ( container, child)               /* line 387 */
      }
      was_sent =  true;                                /* line 388 */
    }
    else {                                             /* line 389 */
      if (((! (is_self ( from_component, container))))) {/* line 390 */
        fromname =  from_component.name;               /* line 391 *//* line 392 */
      }
      let from_sender = mkSender ( fromname, from_component, mevent.port)/* line 393 */;/* line 394 */
      for (let connector of  container.connections) {  /* line 395 */
        if (sender_eq ( from_sender, connector.sender)) {/* line 396 */
          deposit ( container, connector, mevent)      /* line 397 */
          was_sent =  true;                            /* line 398 *//* line 399 */
        }                                              /* line 400 */
      }                                                /* line 401 */
    }
    if ((! ( was_sent))) {                             /* line 402 */
      console.log ( "✗" +  ( container.name.toString ()+  ( ": mevent '".toString ()+  ( mevent.port.toString ()+  ( "' from ".toString ()+  ( fromname.toString ()+  " dropped on floor...".toString ()) .toString ()) .toString ()) .toString ()) .toString ()) )/* line 403 *//* line 404 */
    }                                                  /* line 405 *//* line 406 */
}

function any_child_ready (container) {                 /* line 407 */
    for (let child of  container.children) {           /* line 408 */
      if (child_is_ready ( child)) {                   /* line 409 */
        return  true;                                  /* line 410 *//* line 411 */
      }                                                /* line 412 */
    }
    return  false;                                     /* line 413 *//* line 414 *//* line 415 */
}

function child_is_ready (eh) {                         /* line 416 */
    return ((((((((! ((0=== eh.outq.length))))) || (((! ((0=== eh.inq.length))))))) || (( eh.state!= "idle")))) || ((any_child_ready ( eh))));/* line 417 *//* line 418 *//* line 419 */
}

function append_routing_descriptor (container,desc) {  /* line 420 */
    container.routings.push ( desc)                    /* line 421 *//* line 422 *//* line 423 */
}

function container_injector (container,mevent) {       /* line 424 */
    container_handler ( container, mevent)             /* line 425 *//* line 426 *//* line 427 */
}
                                                       /* line 428 *//* line 429 *//* line 430 */
class Component_Registry {
  constructor () {                                     /* line 431 */

    this.templates = {};                               /* line 432 *//* line 433 */
  }
}
                                                       /* line 434 */
class Template {
  constructor () {                                     /* line 435 */

    this.name =  null;                                 /* line 436 */
    this.template_data =  null;                        /* line 437 */
    this.instantiator =  null;                         /* line 438 *//* line 439 */
  }
}
                                                       /* line 440 */
function mkTemplate (name,template_data,instantiator) {/* line 441 */
    let  templ =  new Template ();                     /* line 442 */;
    templ.name =  name;                                /* line 443 */
    templ.template_data =  template_data;              /* line 444 */
    templ.instantiator =  instantiator;                /* line 445 */
    return  templ;                                     /* line 446 *//* line 447 *//* line 448 */
}
                                                       /* line 449 */
function lnet2internal_from_file (pathname,container_xml) {/* line 450 */
    let filename =   container_xml                     /* line 451 */;

    let jstr = undefined;
    if (filename == "0") {
    jstr = fs.readFileSync (0, { encoding: 'utf8'});
    } else if (pathname) {
    jstr = fs.readFileSync (`${pathname}/${filename}`, { encoding: 'utf8'});
    } else {
    jstr = fs.readFileSync (`${filename}`, { encoding: 'utf8'});
    }
    if (jstr) {
    return JSON.parse (jstr);
    } else {
    return undefined;
    }
                                                       /* line 452 *//* line 453 *//* line 454 */
}

function lnet2internal_from_string () {                /* line 455 */

    return JSON.parse (lnet);
                                                       /* line 456 *//* line 457 *//* line 458 */
}

function delete_decls (d) {                            /* line 459 *//* line 460 *//* line 461 *//* line 462 */
}

function make_component_registry () {                  /* line 463 */
    return  new Component_Registry ();                 /* line 464 */;/* line 465 *//* line 466 */
}

function register_component (reg,template) {
    return abstracted_register_component ( reg, template, false);/* line 467 */
}

function register_component_allow_overwriting (reg,template) {
    return abstracted_register_component ( reg, template, true);/* line 468 *//* line 469 */
}

function abstracted_register_component (reg,template,ok_to_overwrite) {/* line 470 */
    let name = mangle_name ( template.name)            /* line 471 */;
    if ((((((( reg!= null) && ( name))) in ( reg.templates))) && ((!  ok_to_overwrite)))) {/* line 472 */
      load_error ( ( "Component /".toString ()+  ( template.name.toString ()+  "/ already declared".toString ()) .toString ()) )/* line 473 */
      return  reg;                                     /* line 474 */
    }
    else {                                             /* line 475 */
      reg.templates [name] =  template;                /* line 476 */
      return  reg;                                     /* line 477 *//* line 478 */
    }                                                  /* line 479 *//* line 480 */
}

function get_component_instance (reg,full_name,owner) {/* line 481 */
    let template_name = mangle_name ( full_name)       /* line 482 */;
    if ((( template_name) in ( reg.templates))) {      /* line 483 */
      let template =  reg.templates [template_name];   /* line 484 */
      if (( template ==  null)) {                      /* line 485 */
        load_error ( ( "Registry Error (A): Can't find component /".toString ()+  ( template_name.toString ()+  "/".toString ()) .toString ()) )/* line 486 */
        return  null;                                  /* line 487 */
      }
      else {                                           /* line 488 */
        let owner_name =  "";                          /* line 489 */
        let instance_name =  template_name;            /* line 490 */
        if ( null!= owner) {                           /* line 491 */
          owner_name =  owner.name;                    /* line 492 */
          instance_name =  ( owner_name.toString ()+  ( "▹".toString ()+  template_name.toString ()) .toString ()) /* line 493 */;
        }
        else {                                         /* line 494 */
          instance_name =  template_name;              /* line 495 *//* line 496 */
        }
        let instance =  template.instantiator ( reg, owner, instance_name, template.template_data)/* line 497 */;
        return  instance;                              /* line 498 *//* line 499 */
      }
    }
    else {                                             /* line 500 */
      load_error ( ( "Registry Error (B): Can't find component /".toString ()+  ( template_name.toString ()+  "/".toString ()) .toString ()) )/* line 501 */
      return  null;                                    /* line 502 *//* line 503 */
    }                                                  /* line 504 *//* line 505 */
}

function mangle_name (s) {                             /* line 506 */
    /*  trim name to remove code from Container component names _ deferred until later (or never) *//* line 507 */
    return  s;                                         /* line 508 *//* line 509 *//* line 510 */
}
                                                       /* line 511 */
/*  Data for an asyncronous component _ effectively, a function with input *//* line 512 */
/*  and output queues of mevents. */                   /* line 513 */
/*  */                                                 /* line 514 */
/*  Components can either be a user_supplied function (“lea“), or a “container“ *//* line 515 */
/*  that routes mevents to child components according to a list of connections *//* line 516 */
/*  that serve as a mevent routing table. */           /* line 517 */
/*  */                                                 /* line 518 */
/*  Child components themselves can be leaves or other containers. *//* line 519 */
/*  */                                                 /* line 520 */
/*  `handler` invokes the code that is attached to this component. *//* line 521 */
/*  */                                                 /* line 522 */
/*  `instance_data` is a pointer to instance data that the `leaf_handler` *//* line 523 */
/*  function may want whenever it is invoked again. */ /* line 524 */
/*  */                                                 /* line 525 *//* line 526 */
/*  Eh_States :: enum { idle, active } */              /* line 527 */
class Eh {
  constructor () {                                     /* line 528 */

    this.name =  "";                                   /* line 529 */
    this.inq =  []                                     /* line 530 */;
    this.outq =  []                                    /* line 531 */;
    this.owner =  null;                                /* line 532 */
    this.children = [];                                /* line 533 */
    this.visit_ordering =  []                          /* line 534 */;
    this.connections = [];                             /* line 535 */
    this.routings =  []                                /* line 536 */;
    this.handler =  null;                              /* line 537 */
    this.finject =  null;                              /* line 538 */
    this.instance_data =  null;                        /* line 539 */
    this.state =  "idle";                              /* line 540 *//*  bootstrap debugging *//* line 541 */
    this.kind =  null;/*  enum { container, leaf, } */ /* line 542 *//* line 543 */
  }
}
                                                       /* line 544 */
/*  Creates a component that acts as a container. It is the same as a `Eh` instance *//* line 545 */
/*  whose handler function is `container_handler`. */  /* line 546 */
function make_container (name,owner) {                 /* line 547 */
    let  eh =  new Eh ();                              /* line 548 */;
    eh.name =  name;                                   /* line 549 */
    eh.owner =  owner;                                 /* line 550 */
    eh.handler =  container_handler;                   /* line 551 */
    eh.finject =  container_injector;                  /* line 552 */
    eh.state =  "idle";                                /* line 553 */
    eh.kind =  "container";                            /* line 554 */
    return  eh;                                        /* line 555 *//* line 556 *//* line 557 */
}

/*  Creates a new leaf component out of a handler function, and a data parameter *//* line 558 */
/*  that will be passed back to your handler when called. *//* line 559 *//* line 560 */
function make_leaf (name,owner,instance_data,handler) {/* line 561 */
    let  eh =  new Eh ();                              /* line 562 */;
    eh.name =  ( owner.name.toString ()+  ( "▹".toString ()+  name.toString ()) .toString ()) /* line 563 */;
    eh.owner =  owner;                                 /* line 564 */
    eh.handler =  handler;                             /* line 565 */
    eh.instance_data =  instance_data;                 /* line 566 */
    eh.state =  "idle";                                /* line 567 */
    eh.kind =  "leaf";                                 /* line 568 */
    return  eh;                                        /* line 569 *//* line 570 *//* line 571 */
}

/*  Sends a mevent on the given `port` with `data`, placing it on the output *//* line 572 */
/*  of the given component. */                         /* line 573 *//* line 574 */
function send (eh,port,datum,causingMevent) {          /* line 575 */
    let mev = make_mevent ( port, datum)               /* line 576 */;
    put_output ( eh, mev)                              /* line 577 *//* line 578 *//* line 579 */
}

function send_string (eh,port,s,causingMevent) {       /* line 580 */
    let datum = new_datum_string ( s)                  /* line 581 */;
    let mev = make_mevent ( port, datum)               /* line 582 */;
    put_output ( eh, mev)                              /* line 583 *//* line 584 *//* line 585 */
}

function forward (eh,port,mev) {                       /* line 586 */
    let fwdmev = make_mevent ( port, mev.datum)        /* line 587 */;
    put_output ( eh, fwdmev)                           /* line 588 *//* line 589 *//* line 590 */
}

function inject (eh,mev) {                             /* line 591 */
    eh.finject ( eh, mev)                              /* line 592 *//* line 593 *//* line 594 */
}

function set_active (eh) {                             /* line 595 */
    eh.state =  "active";                              /* line 596 *//* line 597 *//* line 598 */
}

function set_idle (eh) {                               /* line 599 */
    eh.state =  "idle";                                /* line 600 *//* line 601 *//* line 602 */
}

function put_output (eh,mev) {                         /* line 603 */
    eh.outq.push ( mev)                                /* line 604 *//* line 605 *//* line 606 */
}

let  projectRoot =  "";                                /* line 607 *//* line 608 */
function set_environment (project_root) {              /* line 609 *//* line 610 */
    projectRoot =  project_root;                       /* line 611 *//* line 612 *//* line 613 */
}
                                                       /* line 614 */
function string_make_persistent (s) {                  /* line 615 */
    /*  this is here for non_GC languages like Odin, it is a no_op for GC languages like Python *//* line 616 */
    return  s;                                         /* line 617 *//* line 618 *//* line 619 */
}

function string_clone (s) {                            /* line 620 */
    return  s;                                         /* line 621 *//* line 622 *//* line 623 */
}

/*  usage: app ${_00_} diagram_filename1 diagram_filename2 ... *//* line 624 */
/*  where ${_00_} is the root directory for the project *//* line 625 *//* line 626 */
function initialize_component_palette_from_files (project_root,diagram_source_files) {/* line 627 */
    let  reg = make_component_registry ();             /* line 628 */
    for (let diagram_source of  diagram_source_files) {/* line 629 */
      let all_containers_within_single_file = lnet2internal_from_file ( project_root, diagram_source)/* line 630 */;
      for (let container of  all_containers_within_single_file) {/* line 631 */
        register_component ( reg,mkTemplate ( container [ "name"], container, container_instantiator))/* line 632 *//* line 633 */
      }                                                /* line 634 */
    }
    initialize_stock_components ( reg)                 /* line 635 */
    return  reg;                                       /* line 636 *//* line 637 *//* line 638 */
}

function initialize_component_palette_from_string (project_root) {/* line 639 */
    /*  this version ignores project_root  */          /* line 640 */
    let  reg = make_component_registry ();             /* line 641 */
    let all_containers = lnet2internal_from_string (); /* line 642 */
    for (let container of  all_containers) {           /* line 643 */
      register_component ( reg,mkTemplate ( container [ "name"], container, container_instantiator))/* line 644 *//* line 645 */
    }
    initialize_stock_components ( reg)                 /* line 646 */
    return  reg;                                       /* line 647 *//* line 648 *//* line 649 */
}
                                                       /* line 650 */
function clone_string (s) {                            /* line 651 */
    return  s                                          /* line 652 *//* line 653 */;/* line 654 */
}

let  load_errors =  false;                             /* line 655 */
let  runtime_errors =  false;                          /* line 656 *//* line 657 */
function load_error (s) {                              /* line 658 *//* line 659 */
    console.error ( s);                                /* line 660 */
                                                       /* line 661 */
    load_errors =  true;                               /* line 662 *//* line 663 *//* line 664 */
}

function runtime_error (s) {                           /* line 665 *//* line 666 */
    console.error ( s);                                /* line 667 */
    runtime_errors =  true;                            /* line 668 *//* line 669 *//* line 670 */
}
                                                       /* line 671 */
function initialize_from_files (project_root,diagram_names) {/* line 672 */
    let arg =  null;                                   /* line 673 */
    let palette = initialize_component_palette_from_files ( project_root, diagram_names)/* line 674 */;
    return [ palette,[ project_root, diagram_names, arg]];/* line 675 *//* line 676 *//* line 677 */
}

function initialize_from_string (project_root) {       /* line 678 */
    let arg =  null;                                   /* line 679 */
    let palette = initialize_component_palette_from_string ( project_root)/* line 680 */;
    return [ palette,[ project_root, null, arg]];      /* line 681 *//* line 682 *//* line 683 */
}

function start (arg,main_container_name,palette,env) { /* line 684 */
    let project_root =  env [ 0];                      /* line 685 */
    let diagram_names =  env [ 1];                     /* line 686 */
    set_environment ( project_root)                    /* line 687 */
    /*  get entrypoint container */                    /* line 688 */
    main_container = get_component_instance ( palette, main_container_name, null)/* line 689 */;
    if ( null ==  main_container) {                    /* line 690 */
      load_error ( ( "Couldn't find container with page name /".toString ()+  ( main_container_name.toString ()+  ( "/ in files ".toString ()+  (`${ diagram_names}`.toString ()+  " (check tab names, or disable compression?)".toString ()) .toString ()) .toString ()) .toString ()) )/* line 694 *//* line 695 */
    }                                                  /* line 696 *//* line 697 */
}

function inject_tick () {                              /* line 698 */
    if ((!  load_errors)) {                            /* line 699 */
      let  marg = new_datum_string ( "")               /* line 700 */;
      let  mev = make_mevent ( "", marg)               /* line 701 */;
      inject ( main_container, mev)                    /* line 702 *//* line 703 */
    }                                                  /* line 704 *//* line 705 */
}

/*  utility functions  */                              /* line 706 */
function send_int (eh,port,i,causing_mevent) {         /* line 707 */
    let datum = new_datum_string (`${ i}`)             /* line 708 */;
    send ( eh, port, datum, causing_mevent)            /* line 709 *//* line 710 *//* line 711 */
}

function send_bang (eh,port,causing_mevent) {          /* line 712 */
    let datum = new_datum_bang ();                     /* line 713 */
    send ( eh, port, datum, causing_mevent)            /* line 714 *//* line 715 */
}

function probeA_instantiate (reg,owner,name,template_data) {/* line 1 */
    let name_with_id = gensymbol ( "?A")               /* line 2 */;
    return make_leaf ( name_with_id, owner, null, probe_handler)/* line 3 */;/* line 4 *//* line 5 */
}

function probeB_instantiate (reg,owner,name,template_data) {/* line 6 */
    let name_with_id = gensymbol ( "?B")               /* line 7 */;
    return make_leaf ( name_with_id, owner, null, probe_handler)/* line 8 */;/* line 9 *//* line 10 */
}

function probeC_instantiate (reg,owner,name,template_data) {/* line 11 */
    let name_with_id = gensymbol ( "?C")               /* line 12 */;
    return make_leaf ( name_with_id, owner, null, probe_handler)/* line 13 */;/* line 14 *//* line 15 */
}

function probe_handler (eh,mev) {                      /* line 16 *//* line 17 */
    let s =  mev.datum.v;                              /* line 18 */
    console.log ( "Info" +  ( "  @".toString ()+  (`${ ticktime}`.toString ()+  ( "  ".toString ()+  ( "probe ".toString ()+  ( eh.name.toString ()+  ( ": ".toString ()+   s.toString ()) .toString ()) .toString ()) .toString ()) .toString ()) .toString ()) )/* line 26 *//* line 27 *//* line 28 */
}

function trash_instantiate (reg,owner,name,template_data) {/* line 29 */
    let name_with_id = gensymbol ( "trash")            /* line 30 */;
    return make_leaf ( name_with_id, owner, null, trash_handler)/* line 31 */;/* line 32 *//* line 33 */
}

function trash_handler (eh,mev) {                      /* line 34 */
    /*  to appease dumped_on_floor checker */          /* line 35 *//* line 36 *//* line 37 */
}

class TwoMevents {
  constructor () {                                     /* line 38 */

    this.firstmev =  null;                             /* line 39 */
    this.secondmev =  null;                            /* line 40 *//* line 41 */
  }
}
                                                       /* line 42 */
/*  Deracer_States :: enum { idle, waitingForFirstmev, waitingForSecondmev } *//* line 43 */
class Deracer_Instance_Data {
  constructor () {                                     /* line 44 */

    this.state =  null;                                /* line 45 */
    this.buffer =  null;                               /* line 46 *//* line 47 */
  }
}
                                                       /* line 48 */
function reclaim_Buffers_from_heap (inst) {            /* line 49 *//* line 50 *//* line 51 *//* line 52 */
}

function deracer_instantiate (reg,owner,name,template_data) {/* line 53 */
    let name_with_id = gensymbol ( "deracer")          /* line 54 */;
    let  inst =  new Deracer_Instance_Data ();         /* line 55 */;
    inst.state =  "idle";                              /* line 56 */
    inst.buffer =  new TwoMevents ();                  /* line 57 */;
    let eh = make_leaf ( name_with_id, owner, inst, deracer_handler)/* line 58 */;
    return  eh;                                        /* line 59 *//* line 60 *//* line 61 */
}

function send_firstmev_then_secondmev (eh,inst) {      /* line 62 */
    forward ( eh, "1", inst.buffer.firstmev)           /* line 63 */
    forward ( eh, "2", inst.buffer.secondmev)          /* line 64 */
    reclaim_Buffers_from_heap ( inst)                  /* line 65 *//* line 66 *//* line 67 */
}

function deracer_handler (eh,mev) {                    /* line 68 */
    let  inst =  eh.instance_data;                     /* line 69 */
    if ( inst.state ==  "idle") {                      /* line 70 */
      if ( "1" ==  mev.port) {                         /* line 71 */
        inst.buffer.firstmev =  mev;                   /* line 72 */
        inst.state =  "waitingForSecondmev";           /* line 73 */
      }
      else if ( "2" ==  mev.port) {                    /* line 74 */
        inst.buffer.secondmev =  mev;                  /* line 75 */
        inst.state =  "waitingForFirstmev";            /* line 76 */
      }
      else {                                           /* line 77 */
        runtime_error ( ( "bad mev.port (case A) for deracer ".toString ()+  mev.port.toString ()) )/* line 78 *//* line 79 */
      }
    }
    else if ( inst.state ==  "waitingForFirstmev") {   /* line 80 */
      if ( "1" ==  mev.port) {                         /* line 81 */
        inst.buffer.firstmev =  mev;                   /* line 82 */
        send_firstmev_then_secondmev ( eh, inst)       /* line 83 */
        inst.state =  "idle";                          /* line 84 */
      }
      else {                                           /* line 85 */
        runtime_error ( ( "bad mev.port (case B) for deracer ".toString ()+  mev.port.toString ()) )/* line 86 *//* line 87 */
      }
    }
    else if ( inst.state ==  "waitingForSecondmev") {  /* line 88 */
      if ( "2" ==  mev.port) {                         /* line 89 */
        inst.buffer.secondmev =  mev;                  /* line 90 */
        send_firstmev_then_secondmev ( eh, inst)       /* line 91 */
        inst.state =  "idle";                          /* line 92 */
      }
      else {                                           /* line 93 */
        runtime_error ( ( "bad mev.port (case C) for deracer ".toString ()+  mev.port.toString ()) )/* line 94 *//* line 95 */
      }
    }
    else {                                             /* line 96 */
      runtime_error ( "bad state for deracer {eh.state}")/* line 97 *//* line 98 */
    }                                                  /* line 99 *//* line 100 */
}

function low_level_read_text_file_instantiate (reg,owner,name,template_data) {/* line 101 */
    let name_with_id = gensymbol ( "Low Level Read Text File")/* line 102 */;
    return make_leaf ( name_with_id, owner, null, low_level_read_text_file_handler)/* line 103 */;/* line 104 *//* line 105 */
}

function low_level_read_text_file_handler (eh,mev) {   /* line 106 */
    let fname =  mev.datum.v;                          /* line 107 */

    if (fname == "0") {
    data = fs.readFileSync (0, { encoding: 'utf8'});
    } else {
    data = fs.readFileSync (fname, { encoding: 'utf8'});
    }
    if (data) {
      send_string (eh, "", data, mev);
    } else {
      send_string (eh, "✗", `read error on file '${fname}'`, mev);
    }
                                                       /* line 108 *//* line 109 *//* line 110 */
}

function ensure_string_datum_instantiate (reg,owner,name,template_data) {/* line 111 */
    let name_with_id = gensymbol ( "Ensure String Datum")/* line 112 */;
    return make_leaf ( name_with_id, owner, null, ensure_string_datum_handler)/* line 113 */;/* line 114 *//* line 115 */
}

function ensure_string_datum_handler (eh,mev) {        /* line 116 */
    if ( "string" ==  mev.datum.kind ()) {             /* line 117 */
      forward ( eh, "", mev)                           /* line 118 */
    }
    else {                                             /* line 119 */
      let emev =  ( "*** ensure: type error (expected a string datum) but got ".toString ()+  mev.datum.toString ()) /* line 120 */;
      send_string ( eh, "✗", emev, mev)                /* line 121 *//* line 122 */
    }                                                  /* line 123 *//* line 124 */
}

class Syncfilewrite_Data {
  constructor () {                                     /* line 125 */

    this.filename =  "";                               /* line 126 *//* line 127 */
  }
}
                                                       /* line 128 */
/*  temp copy for bootstrap, sends "done“ (error during bootstrap if not wired) *//* line 129 */
function syncfilewrite_instantiate (reg,owner,name,template_data) {/* line 130 */
    let name_with_id = gensymbol ( "syncfilewrite")    /* line 131 */;
    let inst =  new Syncfilewrite_Data ();             /* line 132 */;
    return make_leaf ( name_with_id, owner, inst, syncfilewrite_handler)/* line 133 */;/* line 134 *//* line 135 */
}

function syncfilewrite_handler (eh,mev) {              /* line 136 */
    let  inst =  eh.instance_data;                     /* line 137 */
    if ( "filename" ==  mev.port) {                    /* line 138 */
      inst.filename =  mev.datum.v;                    /* line 139 */
    }
    else if ( "input" ==  mev.port) {                  /* line 140 */
      let contents =  mev.datum.v;                     /* line 141 */
      let  f = open ( inst.filename, "w")              /* line 142 */;
      if ( f!= null) {                                 /* line 143 */
        f.write ( mev.datum.v)                         /* line 144 */
        f.close ()                                     /* line 145 */
        send ( eh, "done",new_datum_bang (), mev)      /* line 146 */
      }
      else {                                           /* line 147 */
        send_string ( eh, "✗", ( "open error on file ".toString ()+  inst.filename.toString ()) , mev)/* line 148 *//* line 149 */
      }                                                /* line 150 */
    }                                                  /* line 151 *//* line 152 */
}

class StringConcat_Instance_Data {
  constructor () {                                     /* line 153 */

    this.buffer1 =  null;                              /* line 154 */
    this.buffer2 =  null;                              /* line 155 *//* line 156 */
  }
}
                                                       /* line 157 */
function stringconcat_instantiate (reg,owner,name,template_data) {/* line 158 */
    let name_with_id = gensymbol ( "stringconcat")     /* line 159 */;
    let instp =  new StringConcat_Instance_Data ();    /* line 160 */;
    return make_leaf ( name_with_id, owner, instp, stringconcat_handler)/* line 161 */;/* line 162 *//* line 163 */
}

function stringconcat_handler (eh,mev) {               /* line 164 */
    let  inst =  eh.instance_data;                     /* line 165 */
    if ( "1" ==  mev.port) {                           /* line 166 */
      inst.buffer1 = clone_string ( mev.datum.v)       /* line 167 */;
      maybe_stringconcat ( eh, inst, mev)              /* line 168 */
    }
    else if ( "2" ==  mev.port) {                      /* line 169 */
      inst.buffer2 = clone_string ( mev.datum.v)       /* line 170 */;
      maybe_stringconcat ( eh, inst, mev)              /* line 171 */
    }
    else if ( "reset" ==  mev.port) {                  /* line 172 */
      inst.buffer1 =  null;                            /* line 173 */
      inst.buffer2 =  null;                            /* line 174 */
    }
    else {                                             /* line 175 */
      runtime_error ( ( "bad mev.port for stringconcat: ".toString ()+  mev.port.toString ()) )/* line 176 *//* line 177 */
    }                                                  /* line 178 *//* line 179 */
}

function maybe_stringconcat (eh,inst,mev) {            /* line 180 */
    if ((( inst.buffer1!= null) && ( inst.buffer2!= null))) {/* line 181 */
      let  concatenated_string =  "";                  /* line 182 */
      if ( 0 == ( inst.buffer1.length)) {              /* line 183 */
        concatenated_string =  inst.buffer2;           /* line 184 */
      }
      else if ( 0 == ( inst.buffer2.length)) {         /* line 185 */
        concatenated_string =  inst.buffer1;           /* line 186 */
      }
      else {                                           /* line 187 */
        concatenated_string =  inst.buffer1+ inst.buffer2;/* line 188 *//* line 189 */
      }
      send_string ( eh, "", concatenated_string, mev)  /* line 190 */
      inst.buffer1 =  null;                            /* line 191 */
      inst.buffer2 =  null;                            /* line 192 *//* line 193 */
    }                                                  /* line 194 *//* line 195 */
}

/*  */                                                 /* line 196 *//* line 197 */
function string_constant_instantiate (reg,owner,name,template_data) {/* line 198 *//* line 199 */
    let name_with_id = gensymbol ( "strconst")         /* line 200 */;
    let  s =  template_data;                           /* line 201 */
    if ( projectRoot!= "") {                           /* line 202 */
      s =  s.replaceAll ( "_00_",  projectRoot)        /* line 203 */;/* line 204 */
    }
    return make_leaf ( name_with_id, owner, s, string_constant_handler)/* line 205 */;/* line 206 *//* line 207 */
}

function string_constant_handler (eh,mev) {            /* line 208 */
    let s =  eh.instance_data;                         /* line 209 */
    send_string ( eh, "", s, mev)                      /* line 210 *//* line 211 *//* line 212 */
}

function fakepipename_instantiate (reg,owner,name,template_data) {/* line 213 */
    let instance_name = gensymbol ( "fakepipe")        /* line 214 */;
    return make_leaf ( instance_name, owner, null, fakepipename_handler)/* line 215 */;/* line 216 *//* line 217 */
}

let  rand =  0;                                        /* line 218 *//* line 219 */
function fakepipename_handler (eh,mev) {               /* line 220 *//* line 221 */
    rand =  rand+ 1;
    /*  not very random, but good enough _ ;rand' must be unique within a single run *//* line 222 */
    send_string ( eh, "", ( "/tmp/fakepipe".toString ()+  rand.toString ()) , mev)/* line 223 *//* line 224 *//* line 225 */
}
                                                       /* line 226 */
class Switch1star_Instance_Data {
  constructor () {                                     /* line 227 */

    this.state =  "1";                                 /* line 228 *//* line 229 */
  }
}
                                                       /* line 230 */
function switch1star_instantiate (reg,owner,name,template_data) {/* line 231 */
    let name_with_id = gensymbol ( "switch1*")         /* line 232 */;
    let instp =  new Switch1star_Instance_Data ();     /* line 233 */;
    return make_leaf ( name_with_id, owner, instp, switch1star_handler)/* line 234 */;/* line 235 *//* line 236 */
}

function switch1star_handler (eh,mev) {                /* line 237 */
    let  inst =  eh.instance_data;                     /* line 238 */
    let whichOutput =  inst.state;                     /* line 239 */
    if ( "" ==  mev.port) {                            /* line 240 */
      if ( "1" ==  whichOutput) {                      /* line 241 */
        forward ( eh, "1", mev)                        /* line 242 */
        inst.state =  "*";                             /* line 243 */
      }
      else if ( "*" ==  whichOutput) {                 /* line 244 */
        forward ( eh, "*", mev)                        /* line 245 */
      }
      else {                                           /* line 246 */
        send ( eh, "✗", "internal error bad state in switch1*", mev)/* line 247 *//* line 248 */
      }
    }
    else if ( "reset" ==  mev.port) {                  /* line 249 */
      inst.state =  "1";                               /* line 250 */
    }
    else {                                             /* line 251 */
      send ( eh, "✗", "internal error bad mevent for switch1*", mev)/* line 252 *//* line 253 */
    }                                                  /* line 254 *//* line 255 */
}

class Latch_Instance_Data {
  constructor () {                                     /* line 256 */

    this.datum =  null;                                /* line 257 *//* line 258 */
  }
}
                                                       /* line 259 */
function latch_instantiate (reg,owner,name,template_data) {/* line 260 */
    let name_with_id = gensymbol ( "latch")            /* line 261 */;
    let instp =  new Latch_Instance_Data ();           /* line 262 */;
    return make_leaf ( name_with_id, owner, instp, latch_handler)/* line 263 */;/* line 264 *//* line 265 */
}

function latch_handler (eh,mev) {                      /* line 266 */
    let  inst =  eh.instance_data;                     /* line 267 */
    if ( "" ==  mev.port) {                            /* line 268 */
      inst.datum =  mev.datum;                         /* line 269 */
    }
    else if ( "release" ==  mev.port) {                /* line 270 */
      let  d =  inst.datum;                            /* line 271 */
      if ( d ==  null) {                               /* line 272 */
        send_string ( eh, "", "", mev)                 /* line 273 */
        console.error ( " *** latch sending empty string ***");/* line 274 */
      }
      else {                                           /* line 275 */
        send ( eh, "", d, mev)                         /* line 276 *//* line 277 */
      }
      inst.datum =  null;                              /* line 278 */
    }
    else {                                             /* line 279 */
      send ( eh, "✗", "internal error bad mevent for latch", mev)/* line 280 *//* line 281 */
    }                                                  /* line 282 *//* line 283 */
}

/*  all of the the built_in leaves are listed here */  /* line 284 */
/*  future: refactor this such that programmers can pick and choose which (lumps of) builtins are used in a specific project *//* line 285 *//* line 286 */
function initialize_stock_components (reg) {           /* line 287 */
    register_component ( reg,mkTemplate ( "1then2", null, deracer_instantiate))/* line 288 */
    register_component ( reg,mkTemplate ( "?A", null, probeA_instantiate))/* line 289 */
    register_component ( reg,mkTemplate ( "?B", null, probeB_instantiate))/* line 290 */
    register_component ( reg,mkTemplate ( "?C", null, probeC_instantiate))/* line 291 */
    register_component ( reg,mkTemplate ( "trash", null, trash_instantiate))/* line 292 *//* line 293 */
    register_component ( reg,mkTemplate ( "Read Text File", null, low_level_read_text_file_instantiate))/* line 294 */
    register_component ( reg,mkTemplate ( "Ensure String Datum", null, ensure_string_datum_instantiate))/* line 295 *//* line 296 */
    register_component ( reg,mkTemplate ( "syncfilewrite", null, syncfilewrite_instantiate))/* line 297 */
    register_component ( reg,mkTemplate ( "stringconcat", null, stringconcat_instantiate))/* line 298 */
    register_component ( reg,mkTemplate ( "switch1*", null, switch1star_instantiate))/* line 299 */
    register_component ( reg,mkTemplate ( "latch", null, latch_instantiate))/* line 300 */
    /*  for fakepipe */                                /* line 301 */
    register_component ( reg,mkTemplate ( "fakepipename", null, fakepipename_instantiate))/* line 302 *//* line 303 *//* line 304 */
}

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
