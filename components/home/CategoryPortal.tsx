'use client';

import React, { useState } from 'react';
import { CATEGORIES, CategoryItem } from '@/data/categories';
import { SupportedLanguage } from '@/features/localization/translations';
import {
  Compass,
  Code,
  ShieldAlert,
  Eye,
  Scale,
  Sparkles,
  BookOpen,
  Fingerprint,
  MapPin,
  RotateCcw,
  Play,
  Lock,
  ChevronRight,
  Layers,
  X,
  Award,
  User,
  Percent,
  Shield,
  AlertTriangle,
} from '@/components/ui/Icons';
import { soundEffects } from '@/components/ui/AudioPlayer';

export interface CategoryPortalProps {
  currentLanguage: SupportedLanguage;
  onSelectCategory: (categoryId: string) => void;
  activeRunCount: number;
  solvedRunCount: number;
}

export const CategoryPortal: React.FC<CategoryPortalProps> = ({
  currentLanguage,
  onSelectCategory,
  activeRunCount,
  solvedRunCount,
}) => {
  const [selectedPreviewCategory, setSelectedPreviewCategory] = useState<CategoryItem | null>(null);
  const isHindi = currentLanguage === 'hi';

  const renderIcon = (iconName: string, color: string) => {
    const props = { size: 24, color };
    switch (iconName) {
      case 'Compass':
        return <Compass {...props} />;
      case 'Award':
        return <Award {...props} />;
      case 'User':
        return <User {...props} />;
      case 'Percent':
        return <Percent {...props} />;
      case 'Scale':
        return <Scale {...props} />;
      case 'Shield':
        return <Shield {...props} />;
      case 'MapPin':
        return <MapPin {...props} />;
      case 'AlertTriangle':
        return <AlertTriangle {...props} />;
      case 'Sparkles':
        return <Sparkles {...props} />;
      case 'RotateCcw':
        return <RotateCcw {...props} />;
      case 'Code':
        return <Code {...props} />;
      case 'ShieldAlert':
        return <ShieldAlert {...props} />;
      case 'Eye':
        return <Eye {...props} />;
      case 'BookOpen':
        return <BookOpen {...props} />;
      case 'Fingerprint':
        return <Fingerprint {...props} />;
      default:
        return <Layers {...props} />;
    }
  };

  const handleCardClick = (category: CategoryItem) => {
    if (category.status === 'active') {
      soundEffects.playStampThud();
      onSelectCategory(category.id);
    } else {
      soundEffects.playTypewriterClick();
      setSelectedPreviewCategory(category);
    }
  };

  return (
    <div className="portal-container">
      {/* Grand Portal Banner */}
      <div className="parchment-sheet animate-fade-in portal-banner">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div style={{ flex: '1 1 280px', minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', flexWrap: 'wrap' }}>
              <span className="stamp-badge" style={{ fontSize: '0.72rem', letterSpacing: '0.12em' }}>
                {isHindi ? 'केंद्रीय कथा संग्रह' : 'STORY VAULT • CHOOSE YOUR CATEGORY'}
              </span>
              <span
                style={{
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--emerald-verified)',
                  backgroundColor: 'var(--emerald-bg)',
                  padding: '2px 8px',
                  borderRadius: '10px',
                  border: '1px solid var(--emerald-verified)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontWeight: 600,
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--emerald-verified)',
                  }}
                />
                {isHindi ? '९ प्रमुख श्रेणियां' : '9 STORY CATEGORIES'}
              </span>
            </div>

            <h1 className="portal-banner-title">
              {isHindi ? 'इंटरैक्टिव कथा एवं अन्वेषण मंच' : 'Interactive Stories, Detective Mysteries & Life Simulations'}
            </h1>
            <p
              style={{
                fontSize: '1rem',
                fontStyle: 'italic',
                color: 'var(--ink-muted)',
                fontFamily: 'var(--font-serif)',
                margin: '8px 0 0 0',
                maxWidth: '740px',
                lineHeight: 1.6,
              }}
            >
              {isHindi
                ? 'अपनी पसंदीदा कहानी शैली चुनें। फोरेंसिक साक्ष्य खंगालें, संदिग्धों के झूठ पकड़ें और शाखा-दर-शाखा निर्णयों के साथ सत्य तक पहुंचें।'
                : 'Choose a story category to begin. Search for clues, question people, make important decisions, and see how your choices shape each story.'}
            </p>
          </div>

          {/* Quick Metrics Strip */}
          <div className="portal-metrics-strip">
            <div style={{ textAlign: 'center', flex: '1 1 0', minWidth: 0 }}>
              <div
                className="portal-metric-value"
                style={{
                  color: 'var(--emerald-verified)',
                }}
              >
                {CATEGORIES.filter((c) => c.status === 'active').length}
              </div>
              <div className="portal-metric-label">
                {isHindi ? 'सक्रिय श्रेणियां' : 'Active Categories'}
              </div>
            </div>
            <div style={{ width: '1px', backgroundColor: 'var(--paper-border)', flexShrink: 0 }} />
            <div style={{ textAlign: 'center', flex: '1 1 0', minWidth: 0 }}>
              <div
                className="portal-metric-value"
                style={{
                  color: 'var(--brass-accent)',
                }}
              >
                {CATEGORIES.filter((c) => c.status === 'active').reduce((sum, c) => sum + c.caseCount, 0)}
              </div>
              <div className="portal-metric-label">
                {isHindi ? 'सक्रिय केस व सिमुलेशन' : 'Playable Stories'}
              </div>
            </div>
            <div style={{ width: '1px', backgroundColor: 'var(--paper-border)', flexShrink: 0 }} />
            <div style={{ textAlign: 'center', flex: '1 1 0', minWidth: 0 }}>
              <div
                className="portal-metric-value"
                style={{
                  color: 'var(--ink-charcoal)',
                }}
              >
                {CATEGORIES.filter((c) => c.status !== 'active').length}
              </div>
              <div className="portal-metric-label">
                {isHindi ? 'आगामी श्रेणियां' : 'Coming Soon'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 9 Categories Grid */}
      <div className="portal-category-grid">
        {CATEGORIES.map((category) => {
          const isActive = category.status === 'active';
          const isCareer = category.id === 'career-skills-personal-development';
          const isRelationships = category.id === 'relationships-social-life';
          return (
            <div
              key={category.id}
              onClick={() => handleCardClick(category)}
              className="parchment-sheet animate-fade-in portal-category-card"
              style={{
                border: isActive
                  ? isCareer
                    ? '2px solid #38bdf8'
                    : isRelationships
                    ? '2px solid #f43f5e'
                    : '2px solid var(--brass-accent)'
                  : '1px solid var(--paper-border)',
                boxShadow: isActive
                  ? isCareer
                    ? '0 12px 32px rgba(56, 189, 248, 0.25), 0 4px 12px rgba(0,0,0,0.4)'
                    : isRelationships
                    ? '0 12px 32px rgba(244, 63, 94, 0.25), 0 4px 12px rgba(0,0,0,0.4)'
                    : '0 12px 32px var(--brass-glow), 0 4px 12px rgba(0,0,0,0.4)'
                  : '0 6px 18px rgba(0,0,0,0.25)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                if (isActive) {
                  e.currentTarget.style.boxShadow = isCareer
                    ? '0 18px 40px rgba(56, 189, 248, 0.35), 0 6px 20px rgba(0,0,0,0.5)'
                    : isRelationships
                    ? '0 18px 40px rgba(244, 63, 94, 0.35), 0 6px 20px rgba(0,0,0,0.5)'
                    : '0 18px 40px var(--brass-glow), 0 6px 20px rgba(0,0,0,0.5)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                if (isActive) {
                  e.currentTarget.style.boxShadow = isCareer
                    ? '0 12px 32px rgba(56, 189, 248, 0.25), 0 4px 12px rgba(0,0,0,0.4)'
                    : isRelationships
                    ? '0 12px 32px rgba(244, 63, 94, 0.25), 0 4px 12px rgba(0,0,0,0.4)'
                    : '0 12px 32px var(--brass-glow), 0 4px 12px rgba(0,0,0,0.4)';
                }
              }}
            >
              {/* Category Image Preview Header for Active Categories */}
              {isActive && (
                <div
                  className="portal-card-header-img"
                  style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(12, 14, 18, 0.25) 0%, rgba(26, 24, 20, 0.9) 100%), url('${category.cardHeaderImage || (isCareer ? '/images/career/career-hub-hero.webp' : isRelationships ? '/images/relationships/relationships-hub-hero.webp' : '/images/backgrounds/the-midnight-cipher.webp')}')`,
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.68rem',
                      fontFamily: 'var(--font-mono)',
                      color: isCareer ? '#38bdf8' : isRelationships ? '#fb7185' : 'var(--brass-accent)',
                      backgroundColor: 'rgba(20, 22, 28, 0.88)',
                      border: `1px solid ${isCareer ? '#38bdf8' : isRelationships ? '#fb7185' : 'var(--brass-accent)'}`,
                      padding: '3px 8px',
                      borderRadius: '10px',
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                      backdropFilter: 'blur(4px)',
                    }}
                  >
                    {category.cardHeaderBadge
                      ? category.cardHeaderBadge[currentLanguage]
                      : isCareer
                      ? (isHindi ? '★ करियर एवं कौशल सिमुलेशन' : '★ CAREER & SKILLS SIMULATION')
                      : isRelationships
                      ? (isHindi ? '★ संबंध एवं सामाजिक जीवन' : '★ RELATIONSHIPS & SOCIAL LIFE')
                      : (isHindi ? '★ लाइव केस जांच' : '★ FLAGSHIP MYSTERY ARCHIVE')}
                  </span>
                </div>
              )}

              {/* Top Row: Category No. + Badge */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '16px',
                    flexWrap: 'wrap',
                    gap: '8px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '8px',
                        backgroundColor: category.accentBg,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: `1px solid ${category.themeColor}`,
                      }}
                    >
                      {renderIcon(category.iconName, category.themeColor)}
                    </div>
                    <div>
                      <div
                        style={{
                          fontSize: '0.74rem',
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--ink-muted)',
                          fontWeight: 600,
                          letterSpacing: '0.05em',
                        }}
                      >
                        CATEGORY {String(category.categoryNo).padStart(2, '0')}
                      </div>
                    </div>
                  </div>

                  {isActive ? (
                    <span
                      style={{
                        fontSize: '0.7rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--emerald-verified)',
                        backgroundColor: 'var(--emerald-bg)',
                        border: '1px solid var(--emerald-verified)',
                        padding: '3px 10px',
                        borderRadius: '12px',
                        fontWeight: 700,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                      }}
                    >
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--emerald-verified)',
                        }}
                      />
                      {category.badge[currentLanguage]}
                    </span>
                  ) : (
                    <span
                      style={{
                        fontSize: '0.68rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--ink-muted)',
                        backgroundColor: 'var(--paper-dark)',
                        border: '1px solid var(--paper-border)',
                        padding: '3px 9px',
                        borderRadius: '12px',
                        fontWeight: 600,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                      }}
                    >
                      <Lock size={11} />
                      {category.badge[currentLanguage]}
                    </span>
                  )}
                </div>

                {/* Title & Subtitle */}
                <h3
                  style={{
                    fontSize: '1.45rem',
                    color: 'var(--ink-paper-dark)',
                    margin: '0 0 4px 0',
                    lineHeight: 1.25,
                    fontFamily: 'var(--font-serif)',
                  }}
                >
                  {category.title[currentLanguage]}
                </h3>

                <div
                  style={{
                    fontSize: '0.85rem',
                    fontStyle: 'italic',
                    color: 'var(--ink-muted)',
                    marginBottom: '14px',
                    fontFamily: 'var(--font-serif)',
                  }}
                >
                  {category.subtitle[currentLanguage]}
                </div>

                {/* Description */}
                <p
                  style={{
                    fontSize: '0.9rem',
                    lineHeight: 1.6,
                    color: 'var(--ink-body)',
                    fontFamily: 'var(--font-serif)',
                    margin: '0 0 16px 0',
                  }}
                >
                  {category.description[currentLanguage]}
                </p>
              </div>

              {/* Bottom Row: Tags & Action */}
              <div>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '6px',
                    marginBottom: '16px',
                  }}
                >
                  {category.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '0.7rem',
                        fontFamily: 'var(--font-mono)',
                        backgroundColor: 'var(--paper-dark)',
                        color: 'var(--ink-muted)',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        border: '1px solid var(--paper-border)',
                      }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Primary Button */}
                {isActive ? (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCardClick(category);
                    }}
                    style={{
                      width: '100%',
                      padding: '12px 18px',
                      backgroundColor: isCareer ? '#0284c7' : isRelationships ? '#e11d48' : 'var(--brass-accent)',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '6px',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      fontFamily: 'var(--font-mono)',
                      letterSpacing: '0.04em',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      boxShadow: isCareer
                        ? '0 4px 14px rgba(2, 132, 199, 0.45)'
                        : isRelationships
                        ? '0 4px 14px rgba(225, 29, 72, 0.45)'
                        : '0 4px 14px var(--brass-glow)',
                      transition: 'background-color 0.2s, transform 0.15s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = isCareer ? '#0369a1' : isRelationships ? '#be123c' : 'var(--brass-hover)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = isCareer ? '#0284c7' : isRelationships ? '#e11d48' : 'var(--brass-accent)';
                    }}
                  >
                    <Play size={16} />
                    <span>
                      {category.buttonText
                        ? category.buttonText[currentLanguage]
                        : isCareer
                        ? (isHindi ? 'करियर एवं कौशल हब में प्रवेश करें (१२ सिमुलेशन)' : 'Open Career Hub (12 Stories)')
                        : isRelationships
                        ? (isHindi ? 'संबंध एवं सामाजिक जीवन हब में प्रवेश करें (१२ परिदृश्य)' : 'Open Relationships Hub (12 Stories)')
                        : (isHindi ? 'जांच केंद्र में प्रवेश करें (६ केस)' : 'Play Mystery Cases (6 Stories)')}
                    </span>
                    <ChevronRight size={16} />
                  </button>
                ) : (
                  <div
                    style={{
                      width: '100%',
                      padding: '10px 16px',
                      backgroundColor: 'var(--paper-dark)',
                      border: '1px dashed var(--paper-border)',
                      borderRadius: '6px',
                      color: 'var(--ink-muted)',
                      fontSize: '0.8rem',
                      fontFamily: 'var(--font-mono)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      <Lock size={13} />
                      {isHindi ? 'दस्तावेज़ निर्माणाधीन' : 'Coming Soon'}
                    </span>
                    <span style={{ textDecoration: 'underline', cursor: 'pointer', color: 'var(--brass-accent)' }}>
                      {isHindi ? 'पूर्वावलोकन →' : 'Preview →'}
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Classified Archive Preview Modal */}
      {selectedPreviewCategory && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            zIndex: 1000,
            backdropFilter: 'blur(4px)',
          }}
          onClick={() => setSelectedPreviewCategory(null)}
        >
          <div
            className="parchment-sheet animate-fade-in"
            style={{
              maxWidth: '560px',
              width: '100%',
              borderRadius: '8px',
              padding: '32px',
              boxShadow: '0 24px 60px rgba(0,0,0,0.8)',
              border: `2px solid ${selectedPreviewCategory.themeColor}`,
              position: 'relative',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPreviewCategory(null)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'none',
                border: 'none',
                color: 'var(--ink-muted)',
                cursor: 'pointer',
                padding: '6px',
              }}
            >
              <X size={20} />
            </button>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <span
                className="stamp-badge stamp-alert"
                style={{ fontSize: '0.68rem', letterSpacing: '0.08em' }}
              >
                {selectedPreviewCategory.badge[currentLanguage]}
              </span>
              <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--ink-muted)' }}>
                CATEGORY {String(selectedPreviewCategory.categoryNo).padStart(2, '0')} • {isHindi ? 'आगामी विस्तार' : 'COMING SOON'}
              </span>
            </div>

            <h3
              style={{
                fontSize: '1.6rem',
                color: 'var(--ink-paper-dark)',
                margin: '0 0 6px 0',
                fontFamily: 'var(--font-serif)',
              }}
            >
              {selectedPreviewCategory.title[currentLanguage]}
            </h3>
            <p
              style={{
                fontSize: '0.95rem',
                fontStyle: 'italic',
                color: 'var(--ink-muted)',
                margin: '0 0 16px 0',
                fontFamily: 'var(--font-serif)',
              }}
            >
              {selectedPreviewCategory.subtitle[currentLanguage]}
            </p>

            <div
              style={{
                backgroundColor: 'var(--paper-dark)',
                padding: '16px',
                borderRadius: '6px',
                marginBottom: '18px',
                border: '1px solid var(--paper-border)',
              }}
            >
              <div
                style={{
                  fontSize: '0.75rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--brass-accent)',
                  fontWeight: 600,
                  marginBottom: '8px',
                  textTransform: 'uppercase',
                }}
              >
                {isHindi ? 'कथा एवं परिदृश्य विनिर्देश' : 'About this category'}
              </div>
              <p
                style={{
                  fontSize: '0.9rem',
                  lineHeight: 1.6,
                  color: 'var(--ink-body)',
                  fontFamily: 'var(--font-serif)',
                  margin: 0,
                }}
              >
                {selectedPreviewCategory.description[currentLanguage]}
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
              <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--ink-muted)' }}>
                {isHindi ? 'शामिल विषय एवं टैग:' : 'STORY TAGS & THEMES:'}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {selectedPreviewCategory.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      backgroundColor: 'var(--paper-dark)',
                      color: 'var(--ink-charcoal)',
                      padding: '3px 8px',
                      borderRadius: '4px',
                      border: '1px solid var(--paper-border)',
                    }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div
              style={{
                paddingTop: '16px',
                borderTop: '1px solid var(--paper-border)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span
                style={{
                  fontSize: '0.72rem',
                  color: 'var(--ink-muted)',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                Interactive Story Platform
              </span>
              <button
                type="button"
                onClick={() => setSelectedPreviewCategory(null)}
                style={{
                  padding: '9px 20px',
                  backgroundColor: 'var(--paper-aged, #e8dfcf)',
                  border: '1.5px solid var(--brass-accent, #d4a359)',
                  borderRadius: '6px',
                  color: 'var(--ink-paper-dark, #2b221a)',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontFamily: 'var(--font-mono, monospace)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--brass-accent, #d4a359)';
                  e.currentTarget.style.color = '#1a140e';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--paper-aged, #e8dfcf)';
                  e.currentTarget.style.color = 'var(--ink-paper-dark, #2b221a)';
                }}
              >
                <X size={15} />
                <span>{isHindi ? 'बंद करें' : 'Close'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
