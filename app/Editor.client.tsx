import {
  Tldraw,
  TLUiMenuGroup,
  TLUiOverrides,
  menuItem,
  toolbarItem,
} from "@tldraw/tldraw";
import "@tldraw/tldraw/tldraw.css";
import { CardShape } from "./CardShape";

export const uiOverrides: TLUiOverrides = {
  tools(editor, tools) {
    tools.card = {
      id: "card",
      icon: "color",
      label: "Card" as any,
      kbd: "c",
      readonlyOk: false,
      onSelect: () => {
        editor.setSelectedTool("card");
      },
    };
    return tools;
  },
  toolbar(_app, toolbar, { tools }) {
    toolbar.splice(4, 0, toolbarItem(tools.card));
    return toolbar;
  },
  keyboardShortcutsMenu(_app, keyboardShortcutsMenu, { tools }) {
    const toolsGroup = keyboardShortcutsMenu.find(
      (group) => group.id === "shortcuts-dialog.tools"
    ) as TLUiMenuGroup;
    toolsGroup.children.push(menuItem(tools.card));
    return keyboardShortcutsMenu;
  },
};

const shapes = [CardShape];

export default function Editor() {
  return (
    <div className="tldraw__editor">
      <Tldraw
        autoFocus
        persistenceKey="custom-styles-example"
        shapes={shapes}
        overrides={uiOverrides}
      />
    </div>
  );
}
