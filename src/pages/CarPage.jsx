import { useParams, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { getBrandById } from '../data/cars'
import HeroSection from '../components/HeroSection'
import SpecsSection from '../components/SpecsSection'
import GallerySection from '../components/GallerySection'
import AnimationSection from '../components/AnimationSection'
import AudioSection from '../components/AudioSection'
import Configurator from '../components/Configurator'
import BrandNav from '../components/BrandNav'

export default function CarPage() {
  const { brandId } = useParams()
  const brand = getBrandById(brandId)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    document.title = `APEX — ${brand?.name} ${brand?.model}`
    return () => { document.title = 'APEX — Supercar Showcase' }
  }, [brandId])

  if (!brand) return <Navigate to="/" replace />

  // Apply brand accent color as CSS variable
  return (
    <div style={{ '--brand-accent': brand.accentColor }}>
      {/* 1. Hero — brand name + side profile + logo behind */}
      <HeroSection brand={brand} />

      {/* 2+3. Car name already in hero; 4. Front profile + basic specs */}
      <SpecsSection brand={brand} />

      {/* 5. Gallery angles + detailed specs */}
      <GallerySection brand={brand} />

      {/* 6. Car animation */}
      <AnimationSection brand={brand} />

      {/* 7. Engine sound */}
      <AudioSection brand={brand} />

      {/* 8. Price + configurator */}
      <Configurator brand={brand} />

      {/* Brand navigation */}
      <BrandNav currentBrand={brand} />
    </div>
  )
}
