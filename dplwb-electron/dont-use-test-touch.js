// Script to create or update the ../larson-html.drawio file to trigger a rebuild
const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '../larson-html.drawio');

// Current timestamp
const timestamp = new Date().toISOString();

// Create or update the file with a timestamp to ensure it's modified
fs.writeFileSync(filePath, `<?xml version="1.0" encoding="UTF-8"?>
<mxfile host="app.diagrams.net" modified="${timestamp}" agent="Mozilla/5.0">
  <diagram id="larson-scanner" name="Larson Scanner">
    <mxGraphModel dx="1422" dy="798" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100">
      <root>
        <mxCell id="0" />
        <mxCell id="1" parent="0" />
        <mxCell id="2" value="Larson Scanner" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;fontSize=24;" vertex="1" parent="1">
          <mxGeometry x="325" y="20" width="200" height="40" as="geometry" />
        </mxCell>
        <mxCell id="3" value="Modified at: ${timestamp}" style="text;html=1;strokeColor=none;fillColor=none;align=center;verticalAlign=middle;whiteSpace=wrap;rounded=0;" vertex="1" parent="1">
          <mxGeometry x="300" y="70" width="250" height="30" as="geometry" />
        </mxCell>
      </root>
    </mxGraphModel>
  </diagram>
</mxfile>`);

console.log(`File ${filePath} created/updated with timestamp: ${timestamp}`);
