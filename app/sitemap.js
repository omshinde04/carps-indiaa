export default function sitemap() {

    const baseUrl = "https://www.carpsindia.com"

    return [

        {
            url: `${baseUrl}/`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1.0
        },

        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8
        },

        {
            url: `${baseUrl}/programs`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9
        },

        {
            url: `${baseUrl}/trainers`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7
        },

        {
            url: `${baseUrl}/success`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.7
        },

        {
            url: `${baseUrl}/gallery`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.6
        },

        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.5
        }

    ]
}