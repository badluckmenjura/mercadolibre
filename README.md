
**mercadolibre** [![node](https://img.shields.io/badge/node-10.15.0-green "node")](https://img.shields.io/badge/node-10.15.0-green "node")


para este proyecto decidí incluir redux y utilizar el store de redux a manera de middleware para el uso de la app de mercadolibre, ya que un proyecto independiente de back me parecía innecesario, sin embargo, dejé la ruta del api en un archivo de configuración por si se desea cambiar el apuntamiento.

```javascript
window['runConfig'] = {
  apiUrl: 'xxxxxxxxxx'
}
 
```

decidí también guardar el resultado de la búsqueda en el store ya que este puede ser utilizado para mostrar datos predictivos según las búsquedas del usuario, sin embargo, en la consulta utilicé el valor guardado en la ruta por query para de esta manera conservar el resultado cuando la página es recargada.

adicionalmente cree unos presentadores para el caso en el que el usuario no haya buscado ningún termino y para cuando este no encuentre resultados y de esta manera brindarle retroalimentación al usuario 

espero sea de su agrado ;)



