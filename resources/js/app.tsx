import { createRoot } from "react-dom/client"
import { createInertiaApp } from "@inertiajs/react"
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers"

import "./bootstrap"
import "../css/app.css"

import "remixicon/fonts/remixicon.css"

const appName = import.meta.env.VITE_APP_NAME || "Laravel"

createInertiaApp({
	title: (title) => `${title} | ${appName}`,
	resolve: (name) =>
		resolvePageComponent(
			`./Pages/${name}.tsx`,
			import.meta.glob("./Pages/**/*.tsx")
		),
	setup({ el, App, props }) {
		const root = createRoot(el)

		root.render(<App {...props} />)
	},
	progress: {
		color: "#a54f73"
	}
})
