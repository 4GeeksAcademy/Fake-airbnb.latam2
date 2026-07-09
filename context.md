## Descripción de las 3 páginas

La vista Home (`/`) funciona como puerta de entrada a la experiencia de búsqueda. Presenta una navegación clara, una barra de búsqueda prominente y una primera selección de alojamientos destacados para ayudar al usuario a explorar destinos, fechas y tipos de estancia sin fricción desde el primer contacto con la plataforma.

La vista Catálogo (`/catalog`) está orientada a la comparación. Reúne un conjunto amplio de resultados con filtros, ordenamiento y soporte visual de ubicación para que el usuario reduzca opciones de manera progresiva según precio, zona, comodidades y tipo de alojamiento, hasta encontrar alternativas viables para su viaje.

La vista Detalle de habitación (`/rooms/[id]`) se centra en la decisión de reserva. Expone toda la información crítica de una propiedad específica, incluyendo galería, reglas, anfitrión, servicios y disponibilidad, junto con un bloque de reserva persistente que permite validar fechas, huéspedes y costo total antes de confirmar.

## Componentes principales por vista

### Home

- Navbar
- SearchBar
- CategoryFilter
- HeroSection
- PromoBanner
- ListingGrid
- ListingCard
- PriceBadge
- RatingBadge
- PaginationControl
- Footer

### Catálogo

- Navbar
- SearchBar
- StickyFilterBar
- CategoryFilter
- ActiveFiltersChips
- SortControl
- ListingGrid
- ListingCard
- MapPlaceholder
- ResultCount
- PaginationControl
- SaveSearchButton
- Footer

### Detalle

- Navbar
- Breadcrumb
- RoomTitleHeader
- RatingAndLocation
- PhotoGallery
- HostInfo
- AmenitiesList
- SleepingArrangement
- HouseRules
- AvailabilityCalendar
- ReviewSummary
- ReviewsList
- BookingCard
- GuestCounter
- PriceBreakdown
- SimilarListings
- Footer

## Usuario objetivo

La plataforma está dirigida a personas que necesitan encontrar y reservar un alojamiento temporal para un viaje, ya sea de ocio o trabajo, y que toman decisiones comparando ubicación, precio total, reputación del anfitrión y servicios disponibles. Este usuario busca avanzar con confianza desde una exploración amplia hasta una reserva concreta, con información clara y herramientas de comparación que reduzcan incertidumbre.

## Especificaciones de visión

### Home

#### SearchBarCollapsed

- Nombre: SearchBarCollapsed
- Props:
	- `placeholderText`: string (ej. "Empieza la búsqueda")
	- `leadingIcon`: string (ícono de lupa)
	- `onPress`: function
- Hijos-anidamiento:
	- HomeView
		- SearchBarCollapsed
- Estado local:
	- No se observa estado visual interno en la captura (estado neutral).

#### CategoryTabsRow

- Nombre: CategoryTabsRow
- Props:
	- `tabs`: array de objetos
		- `id`: string
		- `label`: string (ej. "Todo", "Alojamientos", "Experiencias")
		- `icon`: string
	- `activeTabId`: string
	- `onTabChange`: function
- Hijos-anidamiento:
	- HomeView
		- CategoryTabsRow
			- CategoryTabItem (repetido)
- Estado local:
	- Tab activo resaltado visualmente (en la captura: "Todo").
	- Tabs inactivos con estilo neutro.

#### ListingSectionHeader

- Nombre: ListingSectionHeader
- Props:
	- `title`: string (ej. "Alojamientos populares en Pichilemu")
	- `onSeeMore`: function
	- `seeMoreIcon`: string (flecha)
- Hijos-anidamiento:
	- ListingsSection
		- ListingSectionHeader
- Estado local:
	- No se observa estado activo/inactivo; botón de flecha en estado normal.

#### ListingsHorizontalCarousel

- Nombre: ListingsHorizontalCarousel
- Props:
	- `items`: ListingCard[]
	- `sectionId`: string
- Hijos-anidamiento:
	- ListingsSection
		- ListingsHorizontalCarousel
			- ListingCard (repetido horizontalmente)
- Estado local:
	- Posición de scroll horizontal implícita.
	- No se observa paginador visible.

#### ListingCard

- Nombre: ListingCard
- Props:
	- `id`: string
	- `imagePlaceholder`: string
	- `badge`: string opcional (ej. "Favorito entre huéspedes")
	- `isFavorite`: boolean (controla ícono corazón)
	- `title`: string
	- `pricePerNight`: number
	- `nights`: number
	- `rating`: number
- Hijos-anidamiento:
	- ListingsHorizontalCarousel
		- ListingCard
			- ListingImage
			- GuestFavoriteBadge (opcional)
			- FavoriteHeartButton
			- ListingTitle
			- ListingPrice
			- ListingRating
- Estado local:
	- Favorito (corazón activo/inactivo).
	- Badge visible en tarjetas destacadas.

#### PriceInfoBanner

- Nombre: PriceInfoBanner
- Props:
	- `icon`: string (etiqueta)
	- `text`: string (ej. "Los precios incluyen todas las tarifas")
- Hijos-anidamiento:
	- HomeView
		- PriceInfoBanner
- Estado local:
	- No se observa estado dinámico en captura.

#### BottomNavigation

- Nombre: BottomNavigation
- Props:
	- `items`: array
		- `id`: string (`explore`, `favorites`, `account`)
		- `label`: string
		- `icon`: string
	- `activeItemId`: string
	- `onChange`: function
- Hijos-anidamiento:
	- HomeView
		- BottomNavigation
			- BottomNavItem (repetido)
- Estado local:
	- Item activo resaltado (en la captura: "Explora").
	- Items inactivos en estilo neutro.

#### Relación de layout (orden vertical y anidamiento)

- HomeView
	- SearchBarCollapsed
	- CategoryTabsRow
	- ListingsSection (sección temática 1)
		- ListingSectionHeader
		- ListingsHorizontalCarousel
			- ListingCard[]
	- ListingsSection (sección temática 2)
		- ListingSectionHeader
		- ListingsHorizontalCarousel
			- ListingCard[] (en la captura se alcanza a ver el inicio)
	- PriceInfoBanner
	- BottomNavigation (fija al borde inferior)


### Catálogo

#### CatalogSearchHeader

- Nombre: CatalogSearchHeader
- Props:
	- `queryTitle`: string (ej. "Alojamientos en Viña del ...")
	- `querySummary`: string (ej. "Semana en sep. · ¿Cuántos?")
	- `onBack`: function
	- `onOpenFilters`: function
- Hijos-anidamiento:
	- CatalogView
		- CatalogSearchHeader
			- BackButton
			- SearchSummaryPill
			- FiltersButton
- Estado local:
	- No se observa estado visual interno persistente, más allá de interacción táctil de botones.

#### QuickFilterChipsRow

- Nombre: QuickFilterChipsRow
- Props:
	- `chips`: array de objetos
		- `id`: string
		- `label`: string
		- `selected`: boolean
	- `onToggleChip`: function
- Hijos-anidamiento:
	- CatalogView
		- QuickFilterChipsRow
			- FilterChip (repetido)
- Estado local:
	- Estado seleccionado/no seleccionado por chip.

#### CatalogListingCard

- Nombre: CatalogListingCard
- Props:
	- `id`: string
	- `photos`: string[]
	- `photoIndex`: number
	- `isFavorite`: boolean
	- `badge`: string opcional (ej. "Favorito entre huéspedes")
	- `title`: string
	- `subtitle`: string
	- `capacityText`: string
	- `dateRangeText`: string
	- `priceTotal`: number
	- `nights`: number
	- `rating`: number
	- `reviewsCount`: number
	- `paymentNote`: string opcional (ej. "Paga $0 hoy")
	- `cancellationNote`: string opcional (ej. "Cancelación gratuita")
	- `onToggleFavorite`: function
	- `onPhotoChange`: function
- Hijos-anidamiento:
	- CatalogResultsList
		- CatalogListingCard
			- PhotoCarousel
				- PhotoIndexDots
			- FavoriteHeartButton
			- GuestFavoriteBadge (opcional)
			- TitleRow
			- Subtitle
			- CapacityLine
			- DateRangeLine
			- PriceLine
			- MetaBadgesRow (opcional)
- Estado local:
	- `photoIndex` por tarjeta (cambia al deslizar carrusel).
	- `isFavorite` por tarjeta.

#### Reutilización recomendada de tarjeta

- Recomendación: reutilizar `ListingCard` de Home y extenderla con props opcionales para modo catálogo, en lugar de crear un componente completamente nuevo.
- Motivo:
	- Mantiene una sola base visual para portada de foto, badge y favorito.
	- Evita duplicar lógica de interacción (favorito/carrusel).
	- Permite activar campos adicionales (`subtitle`, `capacityText`, `dateRangeText`, `priceTotal`, `paymentNote`, `cancellationNote`) solo en Catálogo.
- Convención sugerida:
	- `variant: "home" | "catalog"` para controlar densidad de metadata.

#### MapToggleFAB

- Nombre: MapToggleFAB
- Props:
	- `label`: string (ej. "Mapa")
	- `icon`: string
	- `isMapOpen`: boolean
	- `onToggleMap`: function
- Hijos-anidamiento:
	- CatalogView
		- MapToggleFAB
- Estado local:
	- `isMapOpen` (abierto/cerrado).

#### BottomNavigation (reutilizado)

- Nombre: BottomNavigation (reutilizado de Home)
- Props:
	- `items`: array
	- `activeItemId`: string
	- `onChange`: function
- Hijos-anidamiento:
	- CatalogView
		- BottomNavigation
			- BottomNavItem (repetido)
- Estado local:
	- Item activo resaltado (en la captura: "Explora").

#### Relación de layout (orden vertical y scroll)

- CatalogView
	- CatalogSearchHeader (fija en la parte superior)
	- QuickFilterChipsRow (debajo de cabecera, desplazamiento horizontal)
	- CatalogResultsList (scroll vertical principal)
		- CatalogListingCard[]
	- MapToggleFAB (flotante sobre el contenido, centrado horizontal cerca del borde inferior, por encima de BottomNavigation)
	- BottomNavigation (fija al borde inferior)

#### Comportamiento de mapa: original vs implementación del brief

- Observado en la captura original:
	- El botón `Mapa` sugiere apertura de mapa tipo overlay a pantalla completa.
- Implementación acordada para este proyecto (brief):
	- Mobile: `MapPlaceholder` debajo del listado de tarjetas (sin overlay).
	- Desktop (`md` en adelante): `MapPlaceholder` al costado derecho del listado.
	- `isMapOpen` se mantiene como estado local para mostrar/ocultar el bloque de mapa dentro del layout, no como modal fullscreen.


### Detalle

#### PhotoGallery

- Nombre: PhotoGallery
- Props:
	- `id`: string
	- `photos`: string[]
	- `initialPhotoIndex`: number (opcional)
	- `totalPhotos`: number
	- `isFavorite`: boolean
	- `onBack`: function
	- `onShare`: function
	- `onToggleFavorite`: function
- Hijos-anidamiento:
	- RoomDetailView
		- PhotoGallery
			- GalleryTopActions
			- BackButton
			- ShareButton
			- FavoriteButton
			- PhotoViewport
			- PhotoIndexBadge
- Estado local:
	- `currentPhotoIndex` (visible como "1/15").
	- `isFavorite` (estado visual del corazón).

#### RoomHeader

- Nombre: RoomHeader
- Props:
	- `title`: string
	- `subtitle`: string
	- `capacityText`: string
	- `rating`: number
	- `reviewsCount`: number
- Hijos-anidamiento:
	- RoomDetailView
		- RoomHeader
			- RoomTitle
			- RoomSubtitle
			- CapacityLine
			- RatingSummary
- Estado local:
	- No se observa estado interactivo propio en esta sección (solo render de datos).

#### BookingCard

- Nombre: BookingCard
- Props:
	- `totalPrice`: number
	- `currency`: string
	- `nights`: number
	- `dateRangeText`: string
	- `upfrontText`: string
	- `cancellationText`: string
	- `ctaLabel`: string
	- `onReserve`: function
- Hijos-anidamiento:
	- RoomDetailView
		- BookingCard
			- PriceBlock
			- DateMeta
			- PolicyBadge
			- ReserveButton
- Estado local:
	- Estado de interacción del botón `Reserva` (normal/pressed).
	- Persistencia visual fija al borde inferior durante el scroll móvil.

#### HostInfo

- Nombre: HostInfo
- Props:
	- `hostName`: string
	- `hostStatusText`: string
	- `avatarInitial`: string
	- `description`: string
- Hijos-anidamiento:
	- RoomDetailView
		- HostInfo
			- HostRow
			- HostAvatar
			- HostIdentity
			- DescriptionBlock
- Estado local:
	- No se observa estado interactivo local; contenido estático visible en scroll.

#### AmenitiesGrid

- Nombre: AmenitiesGrid
- Props:
	- `title`: string
	- `amenities`: array de objetos con `icon` y `label`
- Hijos-anidamiento:
	- RoomDetailView
		- AmenitiesGrid
			- AmenitiesTitle
			- AmenitiesList
			- AmenityItem (repetido)
- Estado local:
	- No se observa estado interactivo local (lista informativa).

#### Relación de layout (orden vertical completo en mobile)

- RoomDetailView
	- PhotoGallery
	- RoomHeader
	- HostInfo
	- AmenitiesGrid
	- BookingCard (fija al borde inferior y visible durante el scroll)

#### Fuera de alcance (presente en el original)

- Highlights con ícono (ej. "Sumérgete", "Check-in excepcional").
- Carrusel "¿Dónde vas a dormir?" con tarjetas de habitaciones.
- Mapa de ubicación.
- Bloque completo de reseñas/listado de comentarios.
