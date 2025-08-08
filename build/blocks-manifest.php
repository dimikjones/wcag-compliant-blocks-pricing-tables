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
			
		),
		'supports' => array(
			'html' => false
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
						'buttonText' => 'Get Started',
						'buttonUrl' => '',
						'featured_table' => false
					),
					array(
						'name' => 'Pro',
						'price' => '$20/month',
						'description' => 'Pro plan features',
						'buttonText' => 'Get Started',
						'buttonUrl' => '',
						'featured_table' => false
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
