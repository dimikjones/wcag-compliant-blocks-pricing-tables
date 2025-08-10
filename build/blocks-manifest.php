<?php
// This file is generated. Do not modify it manually.
return array(
	'wcag-compliant-blocks-pricing-tables' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'wcag-compliant-blocks/wcag-compliant-blocks-pricing-tables',
		'version' => '0.1.0',
		'title' => 'WCAG Compliant Pricing Tables',
		'category' => 'widgets',
		'icon' => 'editor-table',
		'description' => 'Accessible pricing tables block with configurable tiers.',
		'example' => array(
			'attributes' => array(
				'tiers' => array(
					array(
						'name' => 'Basic',
						'price' => '$10/month',
						'description' => 'A great starting point for your needs.',
						'featured_table' => false,
						'features' => array(
							array(
								'text' => 'Feature 1',
								'isExcluded' => false
							),
							array(
								'text' => 'Feature 2',
								'isExcluded' => false
							),
							array(
								'text' => 'Feature 3',
								'isExcluded' => true
							)
						),
						'buttonText' => 'Get Started',
						'buttonUrl' => '#'
					),
					array(
						'name' => 'Pro',
						'price' => '$20/month',
						'description' => 'Our most popular plan, designed for professionals.',
						'featured_table' => true,
						'features' => array(
							array(
								'text' => 'Feature 1',
								'isExcluded' => false
							),
							array(
								'text' => 'Feature 2',
								'isExcluded' => false
							),
							array(
								'text' => 'Feature 3',
								'isExcluded' => false
							)
						),
						'buttonText' => 'Get Started',
						'buttonUrl' => '#'
					)
				)
			)
		),
		'supports' => array(
			'html' => false,
			'align' => array(
				'wide',
				'full'
			),
			'defaultControls' => array(
				'align' => 'wide'
			)
		),
		'textdomain' => 'wcag-compliant-blocks-pricing-tables',
		'attributes' => array(
			'tiers' => array(
				'type' => 'array',
				'default' => array(
					array(
						'name' => 'Basic',
						'price' => '$10/month',
						'description' => 'Basic plan features',
						'featured_table' => false,
						'features' => array(
							array(
								'text' => 'Feature 1',
								'isExcluded' => false
							),
							array(
								'text' => 'Feature 2',
								'isExcluded' => false
							)
						),
						'buttonText' => 'Get Started',
						'buttonUrl' => ''
					),
					array(
						'name' => 'Pro',
						'price' => '$20/month',
						'description' => 'Pro plan features',
						'featured_table' => true,
						'features' => array(
							array(
								'text' => 'Feature 1',
								'isExcluded' => false
							),
							array(
								'text' => 'Feature 2',
								'isExcluded' => false
							)
						),
						'buttonText' => 'Get Started',
						'buttonUrl' => ''
					)
				)
			)
		),
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
