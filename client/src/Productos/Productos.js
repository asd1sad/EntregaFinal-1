
export const Productos = () => {
  return (
            <>
             <h2>Productos</h2>

            <hr/><br/>
            <form action="/uploadfile" encType="multipart/form-data" method="POST">
                <input type="file" name="myFile" />
                <input type="submit" value="Subir Archivo" />
            </form>
            <br/>
            <form action="/uploadfiles" encType="multipart/form-data" method="POST">
                <input type="file" name="myFiles" multiple />
                <input type="submit" value="Subir Archivos" />
            </form>

            
            </>
  );
}