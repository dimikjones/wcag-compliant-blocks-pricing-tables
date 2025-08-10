=== Wcag Compliant Blocks Pricing Tables ===
Contributors:      Marko Dimitrijevic
Plugin URI:        https://github.com/dimikjones/wcag-compliant-blocks-pricing-tables
Tags:              block, pricing, table
Requires at least: 6.8
Tested up to:      6.8
Stable tag:        0.1.0
License:           GPL-2.0-or-later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

Create easily adjustable pricing tables with up to 3 tiers for displaying pricing plans.

== Description ==

Create easily adjustable pricing tables with up to 3 tiers. Tiers and their features are sortable and can be duplicated via repeater fields. Rich Text editing is supported for plan descriptions. Developed for the Twenty Twenty-Five theme, the block includes CSS variable fallbacks for non-block themes.

== Installation ==

1. Download the ZIP file. Then, from the WordPress admin, navigate to Plugins > Add New > Upload Plugin and choose the downloaded ZIP file.
2. Alternatively, clone the repository to the /wp-content/plugins/ directory.
3. Activate the plugin.

== Usage ==

On a post or page, navigate to Add Block and choose the 'WCAG Compliant Pricing Tables' Block.
By default, two pricing tiers will be added, but from the Block Controls you can add third one.
In each tier, the user can add the following content:
- Plan Name
- Price
- Featured Table (toggle control)
- Features (repeater fields with sorting, duplicate & delete, and also an Excluded toggle control)
 -Button text
- Button URL
- Sorting (Move Tier Up or Down)
- Rich Text can be directly edited and entered inside the block for the description
- The block toolbar has an alignment option, and for 3 tiers it is better to use Wide width.

== Assumptions ==
- The block has a preview and defaults to two pricing tiers upon insertion, as specified in the task, providing a quick starting point.
- The layout is built with a mobile-first approach, assuming that a vertical layout is the most effective on small screens. The layout scales up to a multi-column view for tablets and desktops.
- Our approach to creating elements for a product or app website consists of following the design while implementing best practices, enhancements, and optimizations. Behind the scenes and on the front end, we avoid bloating custom elements with too many options unless they are explicitly required. With this in mind, the Block Inserter contains the block with a meaningful preview. Once a block is added to the content canvas, its toolbar includes the Align option. Inside the block body, the plan description is a Rich Text field and is the only meaningful option that we allow the user to edit directly. All other options are located inside the Settings Panel with predefined styles.
- The block's visual design is flat and uses basic CSS animations. It is intended to align with the Twenty Twenty-Five theme without introducing conflicting styles. While visually stunning animations can be a popular path for many developers, they can easily become overwhelming and create distractions for visitors. This can also lead to WCAG Compliance issues, so keeping things simple is often the better approach.

== Considerations ==
- @wordpress/create-block@latest officially supported tool for scaffolding a WordPress plugin that registers a block were used.
- The block registration is using latest WordPress standards introduced in versions 6.7 & 6.8 with a possability to register multiple block types and with improved performance.
- The block meets the WCAG 2.1 AA compliance requirements. The minimum contrast ratio reported by the contrast checker is 8.36:1 for an excluded feature, and https://wave.webaim.org did not raise any errors. The block uses Semantic HTML, ARIA attributes, and sufficient color contrast, and it also supports keyboard navigation.
- A prefers-reduced-motion media rule is in place, using a very short transition duration to create a "quick-snap" when a user's system preference for reduced motion is active.
- A possible enhancement for the block is to improve its technical SEO. By including a schema in the markup, you can help search engines understand the structure of the pricing plans. This could lead to rich snippets in search results, ultimately enhancing the block's overall visibility and organic reach.

== Changelog ==

= 0.1.0 =
*Initial release.
