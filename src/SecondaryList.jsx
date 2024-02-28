import React, { useState } from 'react';
import { useListContext } from './ListContext';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import IconButton from '@mui/joy/IconButton';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

export default function SecondaryList() {
  const { items, setItems } = useListContext();
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  const handleAddItem = () => {
    const newItem = `Item ${items.length + 1}`;
    setItems([...items, newItem]);
  };

  const handleDeleteItem = (index) => {
    const updatedItems = items.filter((item, i) => i !== index);
    setItems(updatedItems);
  };

  const handleEditItem = (index) => {
    setEditIndex(index);
    setEditValue(items[index]);
  };

  const handleSaveEdit = (index) => {
    const updatedItems = [...items];
    updatedItems[index] = editValue;
    setItems(updatedItems);
    setEditIndex(null);
    setEditValue("");
  };

  return (
    <List sx={{ maxWidth: 400 }}>
      {items.map((item, index) => (
        <ListItem key={index}>
          {editIndex === index ? (
            <>
              <input
                type="text"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
              />
              <IconButton
                aria-label="Save"
                size="sm"
                color="success"
                onClick={() => handleSaveEdit(index)}
              >
                Save
              </IconButton>
            </>
          ) : (
            <>
              <ListItemButton onDoubleClick={() => handleEditItem(index)}>
                {item}
              </ListItemButton>
              <IconButton
                aria-label="Delete"
                size="sm"
                color="danger"
                onClick={() => handleDeleteItem(index)}
              >
                <DeleteIcon />
              </IconButton>
            </>
          )}
        </ListItem>
      ))}
      <ListItem>
        <IconButton
          aria-label="Add"
          size="sm"
          variant="plain"
          color="neutral"
          onClick={handleAddItem}
        >
          <AddIcon />
        </IconButton>
      </ListItem>
    </List>
  );
}
