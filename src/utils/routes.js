import { lazy } from "react"

const routes = [
    {
        path: '/',
        label: 'HomePage',
        exact: true,
        component: lazy(() => 
        import('../views/homepage')
        )
    },
    {
        path: '/movies',
        label: 'MoviesPage',
        exact: true,
        component: lazy(() => 
        import('../views/moviespage')
        )
    },
    {
        path: '/movies/:movieId',
        label: 'MoviesDetailsPage',
        exact: false,
        component: lazy(() => 
        import('../views/moviedetailspage')
        )
    }
]

export default routes