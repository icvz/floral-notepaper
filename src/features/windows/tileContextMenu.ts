import { t, type TFunction } from "i18next";
import type { NoteSurfaceAction } from "./surfaceActions";
import type { TileZLevel } from "./surfaceMode";

export interface TileContextMenuItem {
  action: NoteSurfaceAction;
  label: string;
  tone?: "danger";
}

export function getTileContextMenuItems(
  zLevel: TileZLevel = "desktop",
  translate: TFunction = t,
): TileContextMenuItem[] {
  return [
    {
      action: "copy",
      label: translate("contextMenu.tile.copy", { defaultValue: "复制" }),
    },
    {
      action: "save",
      label: translate("contextMenu.tile.save", { defaultValue: "保存" }),
    },
    {
      action: "toggleZLevel",
      label:
        zLevel === "topmost"
          ? translate("contextMenu.tile.switchToDesktop", {
              defaultValue: "切换到桌面上一层",
            })
          : translate("contextMenu.tile.switchToTopmost", {
              defaultValue: "切换到最顶层",
            }),
    },
    {
      action: "switchToPad",
      label: translate("contextMenu.tile.switchToPad", { defaultValue: "转为小窗" }),
    },
    {
      action: "close",
      label: translate("contextMenu.tile.close", { defaultValue: "取消钉屏" }),
      tone: "danger",
    },
  ];
}
