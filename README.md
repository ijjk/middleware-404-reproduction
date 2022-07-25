# Simple app with custom 404 and middleware

This examples demonstrates how the combination of a custom 404 page and a middleware function breaks client side navigation between deployments.

Repro:

1. Clone this repo.
2. Deploy the app to Vercel.
3. Load the homepage in a browser tab, but do not interact with any links.
4. Redeploy the app (wither with a simple code change, or by using the Vercel dashboard to redeploy the existing code).
5. Return to the existing tab but do not refresh the page. Click the link to /other, and then click the link from that page back to /.

Expected: The navigations should succeed.
Actual: The custom 404 page is shown.

While viewing the 404 page, a hard refresh will successfully display the server rendered page.
