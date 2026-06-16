// ============================================================
// Visionary Machines — Tweaks panel (accent color cycler)
// ============================================================

const VM_TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "green"
}/*EDITMODE-END*/;

function VMTweaks() {
  const [t, setTweak] = useTweaks(VM_TWEAK_DEFAULTS);

  React.useEffect(() => {
    document.body.setAttribute('data-accent', t.accent);
  }, [t.accent]);

  const swatch = (name, hex) => ({
    value: name,
    label: name,
    color: hex,
  });

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Accent colour" />
      <div style={{display:'flex', gap:'8px', padding:'4px 0 12px'}}>
        {[
          ['green',  '#AAFF00'],
          ['yellow', '#FFE620'],
          ['orange', '#FF6A1F'],
          ['purple', '#C4AAFF'],
        ].map(([name, hex]) => (
          <button
            key={name}
            onClick={() => setTweak('accent', name)}
            style={{
              flex: 1,
              height: 42,
              border: t.accent === name ? '2px solid #EDE8DE' : '1px solid rgba(255,255,255,0.15)',
              background: hex,
              cursor: 'pointer',
              padding: 0,
              fontFamily: 'Barlow Condensed, sans-serif',
              fontSize: 10,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#1A1714',
              fontWeight: 700,
            }}
            title={name}
          >
            {t.accent === name ? '●' : ''}
          </button>
        ))}
      </div>
      <div style={{
        fontFamily: 'Cormorant, serif',
        fontStyle: 'italic',
        fontSize: 14,
        color: 'rgba(237,232,222,0.6)',
        marginTop: 4,
      }}>
        flows through hero, buttons, dots, dividers
      </div>

      <TweakSection label="Navigate" />
      <TweakSelect
        label="Section"
        value={document.body.dataset.page || 'home'}
        options={[
          { value: 'home',     label: 'Home / Frontispiece' },
          { value: 'submit',   label: 'Call for Submission' },
          { value: 'workshop', label: 'Workshop & Lecture' },
          { value: 'blog',     label: 'Theme Essays' },
          { value: 'gallery',  label: 'Exhibition Gallery' },
        ]}
        onChange={(v) => window.go(v)}
      />
    </TweaksPanel>
  );
}

ReactDOM.createRoot(document.getElementById('tweaks-root')).render(<VMTweaks />);
