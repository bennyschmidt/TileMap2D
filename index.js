window.TileMap2D = ({
  Palette,

  startsAt = 0,

  zone: {
    tiles,

    attributes: {
      tileSize,
      context
    }
  }
}) => {

  /**
   * drawTile
   * Clears the tile buffer and draws from current tiles
   */

  const drawTile = ({
    colIndex,
    rowIndex
  }) => {
    const x = Math.ceil(colIndex * tileSize);
    const y = Math.ceil(rowIndex * tileSize);
    const tile = tiles[rowIndex][colIndex];

    if (tile > startsAt) {
      requestAnimationFrame(() => {
        context.clearRect(
          x,
          y,
          tileSize + .5,
          tileSize + .5
        );

        context.drawImage(
          Palette[tile],
          x,
          y,
          tileSize + .5,
          tileSize + .5
        );
      });
    }
  };

  /**
   * onLoad
   * Initial render
   */

  const onLoad = () => {
    tiles.forEach((row, rowIndex) => {
      row.forEach((_, colIndex) => {
        drawTile({
          colIndex,
          rowIndex
        });
      });
    });
  };

  onLoad();
};
