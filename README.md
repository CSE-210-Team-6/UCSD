# UCSD

Making the UCSD website more performant, faster and more accessible.

You can check our website [https://cse210-team6-main.netlify.app/](https://cse210-team6-main.netlify.app/).

## Scores previously
<hr>

### Desktop

![image](https://github.com/CSE-210-Team-6/UCSD-Website/assets/40426312/463cb2f7-47d9-4a50-8bb0-3881d64a05da)

<hr>

### Mobile

![image](https://github.com/CSE-210-Team-6/UCSD-Website/assets/40426312/7138f601-c22f-4476-b0b3-21245b803f76)

  
## Scores now  

<hr>

### Desktop

![image](https://github.com/CSE-210-Team-6/UCSD-Website/assets/40426312/2af50473-0397-4317-b5ce-5f8e164696e7)  

<hr>

### Mobile

![image](https://github.com/CSE-210-Team-6/UCSD-Website/assets/40426312/199f32a3-908e-49f4-9fff-2e6aa16e364e)


  
(\*Scores were calculated using the [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) tool by Chrome.)

# Problems solved

## Performance

1. Reduced sizes of all images from 5.56Mb to 0.67Mb using online minifi tools.
2. Serve images in next-gen formats: Converted all images from jpg/png to avif format.
3. Download and render all font files from locally. 
4. Removed all unused code from font css files to make it render faster.
5. Made all CSS and Javascript files local. Remove some unnecessary code to make it render faster.
6. Avoid document.write() from code causing delay in performance.

## Diagnostics

1. Serve images in next-gen formats
2. Properly size images and reduced network payloads
3. Eliminate render-blocking resources
4. Efficiently encode images
5. Enable text compression
6. Served static assets with an efficient cache policy by increasing max age of cache control
7. Ensured text remains visible during webfont load by adding font-display:swap attribute to every font-face

## Accessibility

1. [aria-*] attributes do not match their roles.
2. Elements with an ARIA [role] that require children to contain a specific [role] are missing some or all of those required children.
3. [aria-*] attributes do not have valid values.
4. ARIA input fields do not have accessible names

The work primarily required understanding how aria-labels work and what should be the format in which they should be given the values.

## Best Practices
1. Downloaded JavaScript files and images to local directory and avoided loading costs.
2. Compressed the JavaScript code so that it can be parsing more efficiently.
3. Modernized `script.js`.
4. Refined HTML file to load the JS file locally and avoided redundant invocation.
