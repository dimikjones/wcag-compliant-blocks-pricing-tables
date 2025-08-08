/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, Button, RangeControl } from '@wordpress/components';
import { RichText, URLInput } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { tiers } = attributes;

	const updateTierProperty = (index, property, value) => {
		const newTiers = [...tiers];
		newTiers[index][property] = value;
		setAttributes({ tiers: newTiers });
	};

	const addTier = () => {
		if (tiers.length >= 3) return;
		setAttributes({
			tiers: [
				...tiers,
				{
					name: __('New Tier', 'wcag-compliant-blocks-pricing-tables'),
					price: '$0/month',
					description: '',
					buttonText: __('Get Started', 'wcag-compliant-blocks-pricing-tables'),
					buttonUrl: ''
				}
			]
		});
	};

	const removeTier = (index) => {
		if (tiers.length <= 2) return;
		const newTiers = tiers.filter((_, i) => i !== index);
		setAttributes({ tiers: newTiers });
	};

	return (
		<div { ...useBlockProps() }>
			<InspectorControls>
				<PanelBody title={__('Pricing Tiers', 'wcag-compliant-blocks-pricing-tables')}>
					{tiers.map((tier, index) => (
						<PanelBody 
							title={sprintf(__('Tier %d', 'wcag-compliant-blocks-pricing-tables'), index + 1)}
							initialOpen={false}
							key={index}
						>
							<TextControl
								label={__('Plan Name', 'wcag-compliant-blocks-pricing-tables')}
								value={tier.name}
								onChange={(value) => updateTierProperty(index, 'name', value)}
							/>
							<TextControl
								label={__('Price', 'wcag-compliant-blocks-pricing-tables')}
								value={tier.price}
								onChange={(value) => updateTierProperty(index, 'price', value)}
							/>
							<RichText
								label={__('Description', 'wcag-compliant-blocks-pricing-tables')}
								value={tier.description}
								onChange={(value) => updateTierProperty(index, 'description', value)}
								multiline="p"
							/>
							<TextControl
								label={__('Button Text', 'wcag-compliant-blocks-pricing-tables')}
								value={tier.buttonText}
								onChange={(value) => updateTierProperty(index, 'buttonText', value)}
							/>
							<URLInput
								label={__('Button URL', 'wcag-compliant-blocks-pricing-tables')}
								value={tier.buttonUrl}
								onChange={(value) => updateTierProperty(index, 'buttonUrl', value)}
							/>
							{tiers.length > 2 && (
								<Button
									variant="secondary"
									onClick={() => removeTier(index)}
								>
									{__('Remove Tier', 'wcag-compliant-blocks-pricing-tables')}
								</Button>
							)}
						</PanelBody>
					))}
					{tiers.length < 3 && (
						<Button
							variant="primary"
							onClick={addTier}
						>
							{__('Add Tier', 'wcag-compliant-blocks-pricing-tables')}
						</Button>
					)}
				</PanelBody>
			</InspectorControls>

			<div className="wp-block-wcag-compliant-blocks-pricing-tables">
				{tiers.map((tier, index) => (
					<div key={index} className="pricing-tier">
						<h3>{tier.name}</h3>
						<div className="price">{tier.price}</div>
						<RichText.Content
							tagName="div"
							className="description"
							value={tier.description}
						/>
						{tier.buttonUrl && (
							<a href={tier.buttonUrl} className="button">
								{tier.buttonText}
							</a>
						)}
					</div>
				))}
			</div>
		</div>
	);
}
