# UCSD

Making the UCSD website more performant, faster and more accessible.

You can check our website [https://heartfelt-sprite-7cec10.netlify.app/](https://heartfelt-sprite-7cec10.netlify.app/).

Scores previously

<img width="907" alt="Screenshot 2023-10-30 at 8 04 13 PM" src="https://github.com/CSE-210-Team-6/UCSD-Website/assets/40426312/8c6daf3e-3e3f-4082-8ab1-8899bf594749">

Scores now

<img width="907" alt="Screenshot 2023-10-30 at 8 05 11 PM" src="https://github.com/CSE-210-Team-6/UCSD-Website/assets/40426312/36de4d08-c711-44af-8482-682715c9df26">

(\*Scores were calculated using the [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/).)

# Problems solved

## Performance

1. Serve images in next-gen formats
2. Properly size images
3. Eliminate render-blocking resources
4. Efficiently encode images
5. Enable text compression

## Accessibility

1. [aria-*] attributes do not match their roles.
2. Elements with an ARIA [role] that require children to contain a specific [role] are missing some or all of those required children.
3. [aria-*] attributes do not have valid values.
4. ARIA input fields do not have accessible names

The work primarily required understanding how aria-labels work and what should be the format in which they should be given the values.

## Best Practices
