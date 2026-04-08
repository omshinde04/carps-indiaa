export default function sitemap() {
    const baseUrl = "https://www.carpsindia.com";

    const now = new Date().toISOString();

    return [
        // 🔥 MAIN PAGES (HIGH PRIORITY)
        {
            url: `${baseUrl}/`,
            lastModified: now,
            changeFrequency: "weekly",
            priority: 1.0,
        },
        {
            url: `${baseUrl}/programs`,
            lastModified: now,
            changeFrequency: "weekly",
            priority: 0.95,
        },
        {
            url: `${baseUrl}/courses`,
            lastModified: now,
            changeFrequency: "weekly",
            priority: 0.95,
        },
        {
            url: `${baseUrl}/skill-development`,
            lastModified: now,
            changeFrequency: "weekly",
            priority: 0.9,
        },

        // 🔥 SECONDARY PAGES
        {
            url: `${baseUrl}/about`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/trainers`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.75,
        },
        {
            url: `${baseUrl}/success`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.75,
        },

        // 🔥 SUPPORTING PAGES
        {
            url: `${baseUrl}/gallery`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: now,
            changeFrequency: "yearly",
            priority: 0.6,
        },
    ];
}