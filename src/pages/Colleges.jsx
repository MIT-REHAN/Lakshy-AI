import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Star, ChevronDown, CheckCircle2, ChevronLeft, ChevronRight, SlidersHorizontal, Heart, DollarSign, MapPin, ExternalLink, X } from 'lucide-react';
import { useUser } from '../context/UserContext';
import { Navigate } from 'react-router-dom';

// ─────────────────────────────────────────────────────────────────────────────
// MASTER COLLEGE DATABASE (sourced from Collegedunia.com data)
// ─────────────────────────────────────────────────────────────────────────────
const MASTER_COLLEGES = [
  // Engineering
  { name: 'IIT Bombay', location: 'Mumbai', country: 'India', type: 'Public', stream: 'Engineering', rank: 1, fees: '₹2.5 LPA', rating: 5.0, tags: ['Engineering', 'AI & ML', 'Research'], nirf: 3 },
  { name: 'IIT Delhi', location: 'New Delhi', country: 'India', type: 'Public', stream: 'Engineering', rank: 2, fees: '₹2.5 LPA', rating: 4.9, tags: ['Engineering', 'Robotics', 'Data Science'], nirf: 2 },
  { name: 'IIT Madras', location: 'Chennai', country: 'India', type: 'Public', stream: 'Engineering', rank: 3, fees: '₹2.5 LPA', rating: 4.9, tags: ['Engineering', 'Data Science', 'AI & ML'], nirf: 1 },
  { name: 'IIT Kanpur', location: 'Kanpur', country: 'India', type: 'Public', stream: 'Engineering', rank: 4, fees: '₹2.5 LPA', rating: 4.8, tags: ['Engineering', 'Research'], nirf: 5 },
  { name: 'IIT Roorkee', location: 'Roorkee', country: 'India', type: 'Public', stream: 'Engineering', rank: 5, fees: '₹2.5 LPA', rating: 4.8, tags: ['Engineering', 'Coding'], nirf: 6 },
  { name: 'BITS Pilani', location: 'Pilani', country: 'India', type: 'Private', stream: 'Engineering', rank: 6, fees: '₹5 LPA', rating: 4.8, tags: ['Engineering', 'AI & ML', 'Coding'], nirf: 28 },
  { name: 'NIT Trichy', location: 'Trichy', country: 'India', type: 'Public', stream: 'Engineering', rank: 7, fees: '₹1.5 LPA', rating: 4.7, tags: ['Engineering', 'Coding'], nirf: 9 },
  { name: 'VIT Vellore', location: 'Vellore', country: 'India', type: 'Private', stream: 'Engineering', rank: 8, fees: '₹2.5 LPA', rating: 4.5, tags: ['Engineering', 'Coding'], nirf: 11 },
  { name: 'IIIT Hyderabad', location: 'Hyderabad', country: 'India', type: 'Public', stream: 'Engineering', rank: 9, fees: '₹3 LPA', rating: 4.8, tags: ['Engineering', 'AI & ML', 'Data Science'], nirf: 30 },
  { name: 'IISc Bangalore', location: 'Bangalore', country: 'India', type: 'Public', stream: 'Engineering', rank: 10, fees: '₹0.5 LPA', rating: 5.0, tags: ['Research', 'Engineering', 'AI & ML'], nirf: 1 },
  // Medical
  { name: 'AIIMS New Delhi', location: 'New Delhi', country: 'India', type: 'Public', stream: 'Medical', rank: 1, fees: '₹0.15 LPA', rating: 5.0, tags: ['Medical', 'Research'], nirf: 1 },
  { name: 'AFMC Pune', location: 'Pune', country: 'India', type: 'Public', stream: 'Medical', rank: 2, fees: '₹0.5 LPA', rating: 4.8, tags: ['Medical'], nirf: 6 },
  { name: 'Christian Medical College (CMC)', location: 'Vellore', country: 'India', type: 'Private', stream: 'Medical', rank: 3, fees: '₹8 LPA', rating: 4.8, tags: ['Medical', 'Clinical'], nirf: 3 },
  { name: 'JIPMER', location: 'Puducherry', country: 'India', type: 'Public', stream: 'Medical', rank: 4, fees: '₹0.1 LPA', rating: 4.7, tags: ['Medical'], nirf: 4 },
  { name: 'Kasturba Medical College', location: 'Manipal', country: 'India', type: 'Private', stream: 'Medical', rank: 5, fees: '₹12 LPA', rating: 4.7, tags: ['Medical', 'Clinical'], nirf: 7 },
  { name: 'King George\'s Medical University', location: 'Lucknow', country: 'India', type: 'Public', stream: 'Medical', rank: 6, fees: '₹0.2 LPA', rating: 4.6, tags: ['Medical'], nirf: 12 },
  // Management / BBA / MBA
  { name: 'IIM Ahmedabad', location: 'Ahmedabad', country: 'India', type: 'Public', stream: 'Management', rank: 1, fees: '₹30 LPA', rating: 5.0, tags: ['Management', 'Business Finance', 'MBA'], nirf: 1 },
  { name: 'IIM Bangalore', location: 'Bangalore', country: 'India', type: 'Public', stream: 'Management', rank: 2, fees: '₹25 LPA', rating: 4.9, tags: ['Management', 'Business Finance', 'MBA'], nirf: 2 },
  { name: 'IIM Indore (IPM)', location: 'Indore', country: 'India', type: 'Public', stream: 'Management', rank: 3, fees: '₹6 LPA', rating: 4.8, tags: ['Management', 'BBA'], nirf: 7 },
  { name: 'NMIMS Mumbai', location: 'Mumbai', country: 'India', type: 'Private', stream: 'Management', rank: 4, fees: '₹8 LPA', rating: 4.7, tags: ['Management', 'BBA', 'Business Finance'], nirf: 40 },
  { name: 'Symbiosis International University', location: 'Pune', country: 'India', type: 'Private', stream: 'Management', rank: 5, fees: '₹5 LPA', rating: 4.6, tags: ['Management', 'BBA'], nirf: 50 },
  { name: 'ISB Hyderabad', location: 'Hyderabad', country: 'India', type: 'Private', stream: 'Management', rank: 6, fees: '₹40 LPA', rating: 4.8, tags: ['Management', 'Executive MBA'], nirf: 15 },
  // Global
  { name: 'MIT', location: 'Cambridge, MA', country: 'United States', type: 'Private', stream: 'Engineering', rank: 1, fees: '$58K/yr', rating: 5.0, tags: ['Engineering', 'AI & ML', 'Data Science', 'Robotics'] },
  { name: 'Stanford University', location: 'Stanford, CA', country: 'United States', type: 'Private', stream: 'Engineering', rank: 2, fees: '$56K/yr', rating: 5.0, tags: ['Engineering', 'AI & ML', 'Data Science', 'Business Finance'] },
  { name: 'University of Oxford', location: 'Oxford', country: 'United Kingdom', type: 'Public', stream: 'Medical', rank: 1, fees: '£36K/yr', rating: 5.0, tags: ['Medical', 'Research', 'Management'] },
  { name: 'University of Toronto', location: 'Toronto', country: 'Canada', type: 'Public', stream: 'Engineering', rank: 1, fees: 'CAD 50K/yr', rating: 4.8, tags: ['Engineering', 'AI & ML', 'Data Science'] },
  { name: 'TU Munich (TUM)', location: 'Munich', country: 'Germany', type: 'Public', stream: 'Engineering', rank: 1, fees: '€1K/yr', rating: 4.8, tags: ['Engineering', 'Robotics', 'AI & ML'] },
];

const PW_IOI = {
  name: 'PW Institute of Innovation (PW IOI)',
  location: 'Bangalore, Pune, Indore, Lucknow, Noida, Patna',
  country: 'India',
  type: 'Private',
  stream: 'Engineering',
  rank: 0,
  fees: '₹2–4 LPA',
  rating: 4.9,
  tags: ['Engineering', 'Management', 'BBA', 'Top Pick', 'Multi-Campus'],
  match: '99%',
  desc: '6 premium campuses | Industry-aligned B.Tech, BBA & Innovation programs | Strong placement record',
  nirf: null,
};

const FILTERS = {
  countries: ['India', 'United States', 'United Kingdom', 'Canada', 'Germany'],
  types: ['Public', 'Private'],
  streams: ['Engineering', 'Medical', 'Management'],
  specs: ['AI & ML', 'Data Science', 'Robotics', 'Medical', 'Management', 'BBA', 'Research', 'Coding'],
};

export default function Colleges() {
  const { insights } = useUser();
  const [search, setSearch] = useState('');
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedStreams, setSelectedStreams] = useState([]);
  const [selectedSpecs, setSelectedSpecs] = useState([]);
  const [shortlisted, setShortlisted] = useState([]);
  const [page, setPage] = useState(1);
  const PER_PAGE = 6;

  if (!insights) return <Navigate to="/onboarding" replace />;

  // Determine if PW IOI should be shown
  const showPWIOI = insights.colleges?.some(c => c.name?.includes('PW IOI'));

  // Build combined list: context colleges first, then master DB
  const allColleges = useMemo(() => {
    const contextNames = new Set((insights.colleges || []).map(c => c.name));
    const enrichedContext = (insights.colleges || []).map((c, i) => ({
      ...c,
      location: c.location || (c.name?.includes('PW IOI') ? 'Multiple Cities, India' : 'India'),
      country: c.country || 'India',
      type: c.type || (c.name?.includes('PW IOI') ? 'Private' : 'Public'),
      stream: c.stream || 'Engineering',
      tags: c.tags || ['Top Pick', 'Recommended'],
      rank: i,
      fees: c.fees || '₹2 LPA',
      rating: c.rating || 4.8,
    }));
    const filtered = MASTER_COLLEGES.filter(c => !contextNames.has(c.name));
    return [...enrichedContext, ...filtered];
  }, [insights]);

  const filteredColleges = useMemo(() => {
    return allColleges.filter(c => {
      const q = search.trim().toLowerCase();
      const matchSearch = !q || c.name.toLowerCase().includes(q) || c.location.toLowerCase().includes(q) || (c.stream || '').toLowerCase().includes(q);
      const matchCountry = selectedCountries.length === 0 || selectedCountries.includes(c.country);
      const matchType = selectedTypes.length === 0 || selectedTypes.includes(c.type);
      const matchStream = selectedStreams.length === 0 || selectedStreams.includes(c.stream);
      const matchSpec = selectedSpecs.length === 0 || (c.tags || []).some(t => selectedSpecs.includes(t)) || c.tags?.includes('Top Pick');
      return matchSearch && matchCountry && matchType && matchStream && matchSpec;
    });
  }, [allColleges, search, selectedCountries, selectedTypes, selectedStreams, selectedSpecs]);

  const totalPages = Math.ceil(filteredColleges.length / PER_PAGE);
  const pagedColleges = filteredColleges.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const toggle = (arr, item, setArr) => {
    setPage(1);
    if (arr.includes(item)) setArr(arr.filter(i => i !== item));
    else setArr([...arr, item]);
  };

  const resetAll = () => {
    setSearch(''); setSelectedCountries([]); setSelectedTypes([]);
    setSelectedStreams([]); setSelectedSpecs([]); setPage(1);
  };

  const toggleShortlist = (name) => {
    setShortlisted(prev => prev.includes(name) ? prev.filter(n => n !== name) : [...prev, name]);
  };

  const hasFilters = selectedCountries.length + selectedTypes.length + selectedStreams.length + selectedSpecs.length > 0 || search;

  return (
    <div style={{ backgroundColor: '#F9FAFB', minHeight: '100%', paddingBottom: 60 }}>

      {/* Header */}
      <div style={{ padding: '32px 40px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <h1 style={{ fontSize: 28, fontWeight: 800, margin: '0 0 8px' }}>College Explorer</h1>
          <p style={{ fontSize: 14, color: 'var(--text-secondary)', margin: 0 }}>
            Showing {filteredColleges.length} colleges matched to your <strong>{insights.career}</strong> path
          </p>
        </div>
        <button className="btn btn-primary" style={{ gap: 8 }}>
          <Heart size={16} fill={shortlisted.length > 0 ? 'white' : 'none'} />
          Shortlisted ({shortlisted.length})
        </button>
      </div>

      <div style={{ padding: '24px 40px 0' }}>
        {/* Search */}
        <div style={{ display: 'flex', gap: 12, marginBottom: 28 }}>
          <div style={{ flex: 1, position: 'relative' }}>
            <Search size={18} color="var(--hint)" style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)' }} />
            <input
              type="text"
              value={search}
              onChange={e => { setSearch(e.target.value); setPage(1); }}
              placeholder="Search by college name, city or stream..."
              style={{ width: '100%', padding: '14px 16px 14px 44px', border: '1px solid var(--divider)', borderRadius: 12, fontSize: 14, background: 'white', outline: 'none', boxSizing: 'border-box' }}
            />
            {search && (
              <button onClick={() => { setSearch(''); setPage(1); }} style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer' }}>
                <X size={16} color="var(--hint)" />
              </button>
            )}
          </div>
          {hasFilters && (
            <button onClick={resetAll} style={{ padding: '12px 20px', background: '#FEF2F2', color: '#EF4444', border: '1px solid #FECACA', borderRadius: 12, fontWeight: 700, fontSize: 13, cursor: 'pointer' }}>
              Clear Filters
            </button>
          )}
        </div>

        <div className="college-layout">
          {/* Filters Sidebar */}
          <div className="filters-sidebar" style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>

            {/* Streams */}
            <div>
              <h4 style={{ fontSize: 14, fontWeight: 700, margin: '0 0 12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--hint)' }}>Stream</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {FILTERS.streams.map(s => {
                  const on = selectedStreams.includes(s);
                  return (
                    <label key={s} onClick={() => toggle(selectedStreams, s, setSelectedStreams)} style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
                      <div style={{ width: 18, height: 18, border: on ? '2px solid var(--primary)' : '2px solid #CBD5E1', borderRadius: 4, background: on ? 'var(--primary)' : 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0 }}>
                        {on && <CheckCircle2 size={12} color="white" />}
                      </div>
                      <span style={{ fontSize: 14, fontWeight: 500, color: on ? 'var(--primary)' : 'var(--text-secondary)' }}>{s}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Location */}
            <div>
              <h4 style={{ fontSize: 14, fontWeight: 700, margin: '0 0 12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--hint)' }}>Location</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {FILTERS.countries.map(ctr => {
                  const on = selectedCountries.includes(ctr);
                  return (
                    <label key={ctr} onClick={() => toggle(selectedCountries, ctr, setSelectedCountries)} style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
                      <div style={{ width: 18, height: 18, border: on ? '2px solid var(--primary)' : '2px solid #CBD5E1', borderRadius: 4, background: on ? 'var(--primary)' : 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0 }}>
                        {on && <CheckCircle2 size={12} color="white" />}
                      </div>
                      <span style={{ fontSize: 14, fontWeight: 500, color: on ? 'var(--primary)' : 'var(--text-secondary)' }}>{ctr}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Type */}
            <div>
              <h4 style={{ fontSize: 14, fontWeight: 700, margin: '0 0 12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--hint)' }}>Institution Type</h4>
              <div style={{ display: 'flex', gap: 8 }}>
                {FILTERS.types.map(t => {
                  const on = selectedTypes.includes(t);
                  return (
                    <button key={t} onClick={() => toggle(selectedTypes, t, setSelectedTypes)} style={{ flex: 1, padding: '9px 8px', borderRadius: 10, border: on ? '1.5px solid var(--primary)' : '1px solid var(--divider)', background: on ? '#EEF2FF' : 'white', color: on ? 'var(--primary)' : 'var(--text-secondary)', fontWeight: 700, fontSize: 13, cursor: 'pointer' }}>
                      {t}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Specialization */}
            <div>
              <h4 style={{ fontSize: 14, fontWeight: 700, margin: '0 0 12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--hint)' }}>Specialization</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {FILTERS.specs.map(spec => {
                  const on = selectedSpecs.includes(spec);
                  return (
                    <button key={spec} onClick={() => toggle(selectedSpecs, spec, setSelectedSpecs)} style={{ padding: '7px 12px', borderRadius: 20, border: on ? '1.5px solid var(--primary)' : '1px solid var(--divider)', background: on ? 'var(--primary)' : 'white', color: on ? 'white' : 'var(--text-secondary)', fontWeight: 600, fontSize: 12, cursor: 'pointer' }}>
                      {spec}
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* College List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {pagedColleges.length === 0 ? (
              <div style={{ padding: 48, textAlign: 'center', background: 'white', border: '1px solid var(--divider)', borderRadius: 16 }}>
                <p style={{ color: 'var(--hint)', fontSize: 16, fontWeight: 600 }}>No colleges found for your filters.</p>
                <button onClick={resetAll} style={{ marginTop: 12, color: 'var(--primary)', background: 'none', border: 'none', fontWeight: 700, cursor: 'pointer' }}>Reset Filters</button>
              </div>
            ) : pagedColleges.map((college, idx) => (
              <motion.div
                key={college.name}
                className="card"
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.06 * idx }}
                style={{
                  padding: 24, display: 'flex', gap: 20, alignItems: 'flex-start',
                  border: college.match ? '1.5px solid var(--primary)' : '1px solid rgba(229,231,235,0.8)',
                  background: 'white',
                  borderRadius: 16,
                }}
              >
                {/* College Logo */}
                <div style={{ width: 64, height: 64, borderRadius: 14, background: college.match ? 'linear-gradient(135deg, var(--primary), var(--accent))' : '#F3F4F6', display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0 }}>
                  <span style={{ fontSize: 22, fontWeight: 800, color: college.match ? 'white' : 'var(--hint)' }}>
                    {college.name.split(' ').slice(0, 2).map(w => w[0]).join('')}
                  </span>
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <h3 style={{ fontSize: 17, fontWeight: 800, margin: 0 }}>{college.name}</h3>
                        {college.match && <span style={{ padding: '2px 8px', background: 'var(--primary)', color: 'white', fontSize: 11, borderRadius: 10, fontWeight: 700 }}>⭐ Top Pick</span>}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 4 }}>
                        <MapPin size={13} color="var(--hint)" />
                        <span style={{ fontSize: 13, color: 'var(--text-secondary)', fontWeight: 500 }}>{college.location} • {college.country}</span>
                        {college.nirf && <span style={{ padding: '1px 8px', background: '#FEF3C7', color: '#D97706', fontSize: 11, borderRadius: 8, fontWeight: 700 }}>NIRF #{college.nirf}</span>}
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4, flexShrink: 0 }}>
                      <Star size={14} fill="#F59E0B" color="#F59E0B" />
                      <span style={{ fontSize: 13, fontWeight: 700 }}>{college.rating}</span>
                    </div>
                  </div>

                  {college.desc && <p style={{ fontSize: 13, color: 'var(--text-secondary)', margin: '0 0 12px', lineHeight: 1.5 }}>{college.desc}</p>}

                  <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 12 }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 13, fontWeight: 700, color: '#10B981' }}>
                      <DollarSign size={13} /> {college.fees}
                    </span>
                    <span style={{ fontSize: 13, color: 'var(--text-secondary)', fontWeight: 500 }}>{college.type} University</span>
                  </div>

                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {(college.tags || []).slice(0, 4).map(tag => (
                      <span key={tag} style={{ padding: '4px 10px', fontSize: 11, borderRadius: 14, background: tag === 'Top Pick' ? '#EEF2FF' : '#F9FAFB', color: tag === 'Top Pick' ? 'var(--primary)' : 'var(--text-secondary)', border: '1px solid var(--divider)', fontWeight: 600 }}>
                        {tag}
                      </span>
                    ))}
                    {college.campuses && (
                      <span style={{ padding: '4px 10px', fontSize: 11, borderRadius: 14, background: '#FEF3C7', color: '#D97706', border: '1px solid #FDE68A', fontWeight: 600 }}>
                        6 Campuses
                      </span>
                    )}
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flexShrink: 0 }}>
                  <button className="btn btn-primary" style={{ padding: '10px 18px', fontSize: 13 }}>Apply Now</button>
                  <button
                    onClick={() => toggleShortlist(college.name)}
                    className="btn btn-secondary"
                    style={{ padding: '10px 18px', fontSize: 13, background: shortlisted.includes(college.name) ? '#FEF2F2' : undefined, color: shortlisted.includes(college.name) ? '#EF4444' : undefined }}>
                    <Heart size={14} fill={shortlisted.includes(college.name) ? '#EF4444' : 'none'} />
                    {shortlisted.includes(college.name) ? 'Saved' : 'Save'}
                  </button>
                </div>
              </motion.div>
            ))}

            {/* Pagination */}
            {totalPages > 1 && (
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8, marginTop: 16 }}>
                <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1} style={{ width: 36, height: 36, borderRadius: 8, background: 'white', border: '1px solid var(--divider)', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: page === 1 ? 'not-allowed' : 'pointer', opacity: page === 1 ? 0.5 : 1 }}>
                  <ChevronLeft size={16} />
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                  <button key={p} onClick={() => setPage(p)} style={{ width: 36, height: 36, borderRadius: 8, background: page === p ? 'var(--primary)' : 'white', border: page === p ? 'none' : '1px solid var(--divider)', color: page === p ? 'white' : 'var(--text-secondary)', fontWeight: 700, cursor: 'pointer' }}>
                    {p}
                  </button>
                ))}
                <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages} style={{ width: 36, height: 36, borderRadius: 8, background: 'white', border: '1px solid var(--divider)', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: page === totalPages ? 'not-allowed' : 'pointer', opacity: page === totalPages ? 0.5 : 1 }}>
                  <ChevronRight size={16} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
