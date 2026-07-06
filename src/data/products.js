// Product catalog for Granx Industries Pvt Ltd.
// NOTE: Spec values below are typical-range placeholders — replace with
// your actual grade datasheet values before going live.

import granulesColors from '../assets/granules-colors.jpg'
import productionLine from '../assets/production-line.jpg'
import sustainability from '../assets/sustainability.jpg'
import heroFactory from '../assets/hero-factory.jpg'

const products = [
  {
    id: 'flexible-pvc-granules',
    name: 'Flexible PVC Granules',
    gradeCode: 'AVF-100',
    image: productionLine,
    short:
      'Soft, plasticized PVC compounds for wire & cable insulation, footwear and flexible profiles.',
    applications: [
      'Wire & Cable insulation and sheathing',
      'Footwear soles and straps',
      'Flexible hoses and tubing',
      'Automotive interior parts',
    ],
    specs: {
      'Hardness Range': '55–95 Shore A',
      Density: '1.20–1.45 g/cm³',
      'Tensile Strength': '10–22 MPa',
      Elongation: '200–400 %',
      'Color Availability': 'Natural, black and custom-matched colors',
    },
  },
  {
    id: 'rigid-pvc-granules',
    name: 'Rigid PVC Granules',
    gradeCode: 'AVR-200',
    image: heroFactory,
    short:
      'Unplasticized (uPVC) compounds with high stiffness and impact strength for pipes, fittings and profiles.',
    applications: [
      'Pipes and pipe fittings',
      'Window and door profiles',
      'Electrical conduits and trunking',
      'Construction sheets and panels',
    ],
    specs: {
      'Hardness Range': '78–85 Shore D',
      Density: '1.35–1.50 g/cm³',
      'Tensile Strength': '40–55 MPa',
      Elongation: '20–80 %',
      'Color Availability': 'White, grey, ivory and custom colors',
    },
  },
  {
    id: 'transparent-pvc-granules',
    name: 'Transparent PVC Granules',
    gradeCode: 'AVT-300',
    image: sustainability,
    short:
      'Crystal-clear PVC compounds with excellent optical clarity for tubing, packaging and consumer goods.',
    applications: [
      'Clear tubing and hoses',
      'Blister and rigid packaging',
      'Transparent footwear components',
      'Medical-adjacent and consumer products',
    ],
    specs: {
      'Hardness Range': '60–90 Shore A',
      Density: '1.18–1.30 g/cm³',
      'Tensile Strength': '12–20 MPa',
      Elongation: '250–380 %',
      'Color Availability': 'Water-clear, tinted transparent shades',
    },
  },
  {
    id: 'colored-pvc-granules',
    name: 'Colored PVC Granules',
    gradeCode: 'AVC-400',
    image: granulesColors,
    short:
      'Pre-colored PVC compounds matched to your shade card for consistent, ready-to-mold production.',
    applications: [
      'Colored wire & cable jacketing',
      'Footwear and fashion accessories',
      'Household and consumer articles',
      'Custom OEM components',
    ],
    specs: {
      'Hardness Range': '55–95 Shore A / up to 80 Shore D',
      Density: '1.20–1.50 g/cm³',
      'Tensile Strength': '10–45 MPa (grade dependent)',
      Elongation: '30–400 % (grade dependent)',
      'Color Availability': 'Any shade — Pantone / RAL / sample matching',
    },
  },
]

export default products
