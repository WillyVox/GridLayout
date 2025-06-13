import './Grid.css';

const Grid = () => {
    return (
      <>
        <section className="section-1">
          <h1>1. Grid Layout</h1>
          <p>
            A Grid Layout must have a parent element with the <em>display</em>{" "}
            property set to <em>grid</em> or <em>inline-grid</em>.
          </p>
          <p>
            Direct child element(s) of the grid container automatically becomes
            grid items.
          </p>
          <div className="container-1">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
          </div>
        </section>
        <section>
          <h1>All CSS Grid Properties</h1>
          {/* Property	Description
  align-content	Vertically aligns the whole grid inside the container (when total grid size is smaller than container)
  align-items	Aligns content in a grid item along the column axis
  align-self	Aligns the content for a specific grid item along the column axis
  display	Specifies the display behavior (the type of rendering box) of an element
  column-gap	Specifies the gap between the columns
  gap	A shorthand property for the row-gap and the column-gap properties
  grid	A shorthand property for the grid-template-rows, grid-template-columns, grid-template-areas, grid-auto-rows, grid-auto-columns, and the grid-auto-flow properties
  grid-area	Either specifies a name for the grid item, or this property is a shorthand property for the grid-row-start, grid-column-start, grid-row-end, and grid-column-end properties
  grid-auto-columns	Specifies a default column size
  grid-auto-flow	Specifies how auto-placed items are inserted in the grid
  grid-auto-rows	Specifies a default row size
  grid-column	A shorthand property for the grid-column-start and the grid-column-end properties
  grid-column-end	Specifies where to end the grid item
  grid-column-start	Specifies where to start the grid item
  grid-row	A shorthand property for the grid-row-start and the grid-row-end properties
  grid-row-end	Specifies where to end the grid item
  grid-row-start	Specifies where to start the grid item
  grid-template	A shorthand property for the grid-template-rows, grid-template-columns and grid-areas properties
  grid-template-areas	Specifies how to display columns and rows, using named grid items
  grid-template-columns	Specifies the size of the columns, and how many columns in a grid layout
  grid-template-rows	Specifies the size of the rows in a grid layout
  justify-content	Horizontally aligns the whole grid inside the container (when total grid size is smaller than container)
  justify-self	Aligns the content for a specific grid item along the row axis
  place-self	A shorthand property for the align-self and the justify-self properties
  place-content	A shorthand property for the align-content and the justify-content properties
  row-gap	Specifies the gap between the grid rows */}
        </section>
        <section className="section-2">
          <h1>2. The grid-template-columns Property</h1>
  
          <p>
            You can use the <em>grid-template-columns</em> property to specify the
            number of columns in your grid layout.
          </p>
  
          <div className="grid-container-2">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
          </div>
        </section>
        <section className="section-3">
          <h1>3. The grid-template-rows Property</h1>
  
          <p>
            Use the <em>grid-template-rows</em> property to specify the size
            (height) of each row.
          </p>
  
          <p>
            Notice that the first row in this grid is 80px high, the second row is
            200px high, and the third row is 80px (and if a fourth row had been
            added, it would have been 200px high):
          </p>
  
          <div className="grid-container-3">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
          </div>
        </section>
        <section className="section-4">
          <h1>4. The justify-content Property</h1>
  
          <p>
            Use the <em>justify-content</em> property to align the grid items
            inside the container.
          </p>
  
          <p>
            The value "space-evenly" value displays the grid items with equal
            space around them:
          </p>
  
          <div className="grid-container-4">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
          </div>
        </section>
        <section className="section-5">
          <h1>5. The align-content Property</h1>
  
          <p>
            Use the <em>align-content</em> property to vertically align the grid
            inside the container.
          </p>
  
          <p>
            The value "center" positions the grid items in the middle of the
            container:
          </p>
  
          <div className="grid-container-5">
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
          </div>
        </section>
      </>
    );
  };
  export default Grid;
  