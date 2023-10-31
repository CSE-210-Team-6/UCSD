# UCSD

Making the UCSD website more performant, faster and more accessible.

You can check our website [https://heartfelt-sprite-7cec10.netlify.app/](https://heartfelt-sprite-7cec10.netlify.app/).

Scores previously

<img width="907" alt="Screenshot 2023-10-30 at 8 04 13 PM" src="https://github.com/CSE-210-Team-6/UCSD-Website/assets/40426312/8c6daf3e-3e3f-4082-8ab1-8899bf594749">

Scores now

<img width="907" alt="Screenshot 2023-10-30 at 8 05 11 PM" src="https://github.com/CSE-210-Team-6/UCSD-Website/assets/40426312/36de4d08-c711-44af-8482-682715c9df26">

(*Scores were calculated using the [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/).)

# Problems solved

## Performance

1. Reduced sizes of all images from 5.56Mb to 0.67Mb using online minifi tools.
2. Serve images in next-gen formats: Converted all images from jpg/png to avif format.
3. Download and render all font files from locally. 
4. Removed all unused code from font css files to make it render faster.
5. Made all CSS and Javascript files local. Remove some unnecessary code to make it render faster.
6. Avoid document.write() from code causing delay in performance.

## Diagnostics

## Accessibility

1. [aria-*] attributes do not match their roles.
2. Elements with an ARIA [role] that require children to contain a specific [role] are missing some or all of those required children.
3. [aria-*] attributes do not have valid values.
4. ARIA input fields do not have accessible names

The work primarily required understanding how aria-labels work and what should be the format in which they should be given the values.

## Best Practices
