import { useState } from 'react';
import React from 'react';
import { Box, Container, styled } from '@mui/material';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import { Controlled as ControlledEditor } from 'react-codemirror2';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

import '../App.css';

const Containar = styled(Box)`
  flex-grow: 1;
  flex-basis: 0;
  display: flex;
  flex-direction: column;
  padding: 0 8px 8px;
`;

const HeadingBox = styled(Box)`
  background: #1d1e22;
  display: flex;
  padding: 9px;
`;

const Headar = styled(Box)`
  display: flex;
  background: #060606;
  color: #aaaeBC;
  justify-content: space-between;
  font-weight: 700;
`;

const Editor = ({ title, icon, color, value, onChange }) => {
  const [open, setOpen] = useState(true);

  const handleChange = (editor, data, value) => {
    onChange(value);
  };

  return (
    <Containar style={open ? null : { flexGrow: 0 }}>
      <Headar>
        <HeadingBox>
          <Box
            component="span"
            style={{
              background: color,
              height: 20,
              width: 20,
              display: 'flex',
              placeContent: 'center',
              borderRadius: 5,
              marginRight: 5,
              paddingBottom: 2,
            }}
          >
            {icon}
          </Box>
          {title}
        </HeadingBox>
        <CloseFullscreenIcon
          fontSize="small"
          style={{ alignSelf: 'center' }}
          onClick={() => setOpen(prevState => !prevState)}
        />
      </Headar>
      <ControlledEditor
        className="controlled-editor"
        onBeforeChange={handleChange}
        value={value}
        options={{
          mode: 'xml', // Set mode to 'xml' for HTML support
          theme: 'material',
          lineNumbers: true,
        }}
      />
    </Containar>
  );
};

export default Editor;
