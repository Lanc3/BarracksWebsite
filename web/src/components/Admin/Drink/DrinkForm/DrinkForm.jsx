import { useState } from 'react'

import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  TextAreaField,
  NumberField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'

const CATEGORIES = ['Cocktails', 'Slushies', 'Beer', 'Wine', 'Spirits', 'Soft Drinks']

const DrinkForm = (props) => {
  const [ingredientsInput, setIngredientsInput] = useState(
    props.drink?.ingredients?.join(', ') || ''
  )
  const [tagsInput, setTagsInput] = useState(
    props.drink?.tags?.join(', ') || ''
  )

  const onSubmit = (data) => {
    // Convert comma-separated strings to arrays
    const ingredients = ingredientsInput
      .split(',')
      .map((i) => i.trim())
      .filter((i) => i)

    const tags = tagsInput
      .split(',')
      .map((t) => t.trim())
      .filter((t) => t)

    // Generate slug from name if not provided
    const slug = data.slug || data.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

    const processedData = {
      ...data,
      slug,
      ingredients,
      tags,
      priceCents: parseInt(data.priceCents) || 0,
      abv: data.abv ? parseFloat(data.abv) : null,
      sortOrder: parseInt(data.sortOrder) || 0,
    }

    props.onSave(processedData, props?.drink?.id)
  }

  return (
    <div className="text-white">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="bg-red-500/10 border border-red-500/50 rounded-lg p-4 mb-6"
          titleClassName="text-red-400 font-medium"
          listClassName="text-red-300 text-sm mt-2"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <Label
              name="name"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Name *
            </Label>
            <TextField
              name="name"
              defaultValue={props.drink?.name}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              validation={{ required: true }}
            />
            <FieldError name="name" className="text-red-400 text-sm mt-1" />
          </div>

          {/* Slug */}
          <div>
            <Label
              name="slug"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Slug (auto-generated if empty)
            </Label>
            <TextField
              name="slug"
              defaultValue={props.drink?.slug}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="e.g., bahama-mama"
            />
            <FieldError name="slug" className="text-red-400 text-sm mt-1" />
          </div>

          {/* Category */}
          <div>
            <Label
              name="category"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Category *
            </Label>
            <select
              name="category"
              defaultValue={props.drink?.category || 'Cocktails'}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <FieldError name="category" className="text-red-400 text-sm mt-1" />
          </div>

          {/* Price */}
          <div>
            <Label
              name="priceCents"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Price (cents)
            </Label>
            <NumberField
              name="priceCents"
              defaultValue={props.drink?.priceCents || 0}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="e.g., 950 for €9.50"
            />
            <FieldError name="priceCents" className="text-red-400 text-sm mt-1" />
          </div>

          {/* ABV */}
          <div>
            <Label
              name="abv"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              ABV (%)
            </Label>
            <NumberField
              name="abv"
              defaultValue={props.drink?.abv}
              step="0.1"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="e.g., 12.5"
            />
            <FieldError name="abv" className="text-red-400 text-sm mt-1" />
          </div>

          {/* Sort Order */}
          <div>
            <Label
              name="sortOrder"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Sort Order
            </Label>
            <NumberField
              name="sortOrder"
              defaultValue={props.drink?.sortOrder || 0}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <FieldError name="sortOrder" className="text-red-400 text-sm mt-1" />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <Label
              name="description"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Description
            </Label>
            <TextAreaField
              name="description"
              defaultValue={props.drink?.description}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              rows={3}
              placeholder="A brief description of the drink..."
            />
            <FieldError name="description" className="text-red-400 text-sm mt-1" />
          </div>

          {/* Ingredients */}
          <div className="md:col-span-2">
            <Label className="block text-sm font-medium text-gray-300 mb-2">
              Ingredients (comma-separated) *
            </Label>
            <textarea
              value={ingredientsInput}
              onChange={(e) => setIngredientsInput(e.target.value)}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              rows={2}
              placeholder="Vodka, Lime Juice, Simple Syrup, Soda Water"
            />
          </div>

          {/* Tags */}
          <div className="md:col-span-2">
            <Label className="block text-sm font-medium text-gray-300 mb-2">
              Tags (comma-separated)
            </Label>
            <TextField
              name="tagsInput"
              value={tagsInput}
              onChange={(e) => setTagsInput(e.target.value)}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Popular, New, Signature, Tropical"
            />
          </div>

          {/* Icon Key */}
          <div>
            <Label
              name="iconKey"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Icon Key
            </Label>
            <TextField
              name="iconKey"
              defaultValue={props.drink?.iconKey}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="cocktail, martini, beer, wine, slush"
            />
            <FieldError name="iconKey" className="text-red-400 text-sm mt-1" />
          </div>

          {/* Image URL */}
          <div>
            <Label
              name="imageUrl"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Image URL
            </Label>
            <TextField
              name="imageUrl"
              defaultValue={props.drink?.imageUrl}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="https://..."
            />
            <FieldError name="imageUrl" className="text-red-400 text-sm mt-1" />
          </div>

          {/* Checkboxes */}
          <div className="md:col-span-2 flex flex-wrap gap-6">
            <div className="flex items-center">
              <CheckboxField
                name="isActive"
                defaultChecked={props.drink?.isActive ?? true}
                className="w-4 h-4 text-purple-600 bg-gray-700 border-gray-600 rounded focus:ring-purple-500"
              />
              <Label
                name="isActive"
                className="ml-2 text-sm text-gray-300"
              >
                Active (visible on menu)
              </Label>
            </div>
            <div className="flex items-center">
              <CheckboxField
                name="isFeatured"
                defaultChecked={props.drink?.isFeatured ?? false}
                className="w-4 h-4 text-purple-600 bg-gray-700 border-gray-600 rounded focus:ring-purple-500"
              />
              <Label
                name="isFeatured"
                className="ml-2 text-sm text-gray-300"
              >
                Featured
              </Label>
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="mt-8 flex justify-end space-x-4">
          <Submit
            disabled={props.loading}
            className="px-6 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {props.loading ? 'Saving...' : 'Save Drink'}
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default DrinkForm
