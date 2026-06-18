Design a complete logo system for "Datistica", an applied AI research lab in
Rio de Janeiro focused on decision intelligence: prediction + mathematical
optimization (Decision-Focused Learning / Predict-then-Optimize).

CORE IDEA
Convergence of uncertainty into one optimal decision.
The symbol should feel like "predict -> prescribe":
- several uncertain inputs (points/paths/vectors) resolve into one final point;
- or a minimal "D" monogram built from converging trajectories;
- or a compact geometric network collapsing into a single decisive node.

The meaning must read as optimization/decision quality, not generic "AI".

DO NOT USE
- brain icons, chatbot faces, robot motifs, circuit-board cliches;
- bar/line charts, arrows inside charts, globes, lightbulbs, or infinity loops;
- gradients, glows, shadows, 3D, glassmorphism, mascots, or noisy textures.

VISUAL STYLE
- Strictly minimal, geometric, flat, mathematically precise.
- High negative space; very few elements; clear silhouette.
- Consistent stroke logic (uniform or intentionally stepped, never random).
- Optical balance at very small sizes (favicon) and very large sizes (signage).

COLOR SYSTEM
- Primary ink: near-black #111111.
- Reverse: white mark on #111111.
- Optional accent (sparingly): deep blue #1A3C6E.
- Must work perfectly in 1-color before any accent is applied.

GEOMETRY + CONSTRUCTION RULES
- Prefer a grid-based construction (8px or 10px logic).
- Keep node count low (3-7 max) to preserve clarity.
- If using paths, avoid excessive intersections; keep the convergence obvious.
- End state should always be one solid focal point (the "decision").
- If using a "D" monogram, ensure it reads as both "D" and convergence.

WORDMARK DIRECTION
- "Datistica" wordmark should feel academic, sober, and timeless.
- Two valid directions (pick one and execute cleanly):
  1) refined serif (Garamond/Georgia-like tension), or
  2) clean geometric sans with subtle custom spacing.
- Generous tracking; strong rhythm; no trendy distortions.

LOCKUPS TO PRODUCE
1) Primary horizontal lockup: symbol + wordmark.
2) Stacked lockup (for square spaces).
3) Standalone symbol (app icon / favicon).
4) Wordmark-only version.

REQUIRED FILES / EXPORTS
- SVG master (clean paths, no unnecessary points).
- PNG previews: black-on-white and white-on-black.
- Monochrome and reversed variants.
- Include clear-space rule and minimum-size guidance.

EVALUATION CHECKLIST
- Is the convergence concept understandable in under 2 seconds?
- Does it remain recognizable at 16px favicon size?
- Does it avoid all generic AI startup visual cliches?
- Does it look credible for a research institute?
- Does mono (1-color) still feel premium and precise?

TONE
Sober, scientific, and confident. Institutional rigor over marketing flair.

---

## CONCEPT DIRECTIONS (pick one, then refine)

All three share one construction grid: 64×64 unit canvas, 8-unit grid,
stroke weight 2.5 (scales proportionally). Focal decision node is always
a filled circle, radius 3.5, anchored at (48, 32) — right-of-center so
the mark breathes when paired with the wordmark on the left.

```
Canvas (64×64, schematic)

  ●                    ← input nodes (hollow or small filled)
   \  |  /
    \ | /              ← converging paths (2.5 stroke, round caps)
     \|/
      ●                ← decision node (solid, r=3.5) at (48, 32)
```

---

### Direction A — "Five-to-One" (network convergence)

**Idea:** Five uncertain signals collapse into one prescription point.
Reads as a small decision graph, not a neural net.

**Nodes (hollow circles, r=2, stroke 2.5, fill none)**
| Node | Position | Role |
|------|----------|------|
| N1   | (12, 14) | top-left input |
| N2   | (12, 32) | mid-left input |
| N3   | (12, 50) | bottom-left input |
| N4   | (28, 10) | top input |
| N5   | (28, 54) | bottom input |
| D    | (48, 32) | decision — solid fill #111111 |

**Paths:** Straight segments from each input node to D. No curves.
Segments must not cross each other (fan layout). Use round line caps.

**Silhouette at 16px:** Reads as a wedge of lines pointing right into a dot.
Distinct from generic "share" or "merge" icons because of the asymmetric
5-node fan and the off-center focal point.

**Wordmark pairing:** Symbol left, "Datistica" right. Symbol width ≈ 1.1×
cap-height of wordmark. Gap between symbol and wordmark = 0.6× cap-height.

**Accent option:** Decision node D in #1A3C6E; everything else #111111.

**ASCII preview**
```
    o
   /|\
  o | o        o
   \|/        /
    o--------●
```

---

### Direction B — "Vector Collapse" (trajectory prescription)

**Idea:** Three prediction trajectories (thin vectors) converge and
terminate at one decisive point. Feels like optimization over a feasible
region — mathematical, directional, not decorative.

**Construction**
- Decision node D at (48, 32), solid circle r=3.5.
- Three vectors, each drawn as a single line segment ending at D's center.
  Use 2.5 stroke, round caps. Vectors do NOT pass through D — they stop
  at the node edge (clean termination, not overlap).

| Vector | Start | End (tangent to D) | Angle |
|--------|-------|-------------------|-------|
| V1     | (8, 18)  | (44.5, 28.5) | ~25°  |
| V2     | (8, 32)  | (44.5, 32.0) | 0°    |
| V3     | (8, 46)  | (44.5, 35.5) | ~−25° |

- Optional: tiny open-circle "origin" markers (r=1.5, stroke 1.5) at each
  vector start — only if they remain visible at 24px+. Omit for favicon.

**Silhouette at 16px:** Three parallel-ish strokes converging right into a
solid dot. Very clean; highest favicon legibility of the three directions.

**Wordmark pairing:** Works best with geometric sans (Direction 2 from
WORDMARK). Tight, engineered feel. Tracking +40 on "Datistica".

**Accent option:** Middle vector V2 in #1A3C6E (the "chosen" trajectory);
other elements #111111.

**ASCII preview**
```
o --------\
o ---------●
o --------/
```

---

### Direction C — "Converging D" (monogram)

**Idea:** The letter "D" is constructed from converging paths, so the
symbol is simultaneously a monogram and a convergence metaphor. Strongest
brand recall; hardest to execute cleanly at 16px.

**Construction (64×64 canvas)**
- Vertical stem: rectangle or stroke from (14, 12) to (14, 52), width 2.5.
- Bowl of the D is implied by three converging arcs/lines, not a closed
  outline — the negative space between stem and paths forms the "D" counter.

| Path | Start | Control / mid | End at D |
|------|-------|---------------|----------|
| P1   | (14, 12) | via (30, 12) | (48, 32) |
| P2   | (14, 32) | — (straight) | (48, 32) |
| P3   | (14, 52) | via (30, 52) | (48, 32) |

- P1 and P3 may be very subtle quadratic curves (control points at
  (30, 12) and (30, 52)) to suggest a bowl without drawing a full arc.
- Decision node D at (48, 32), solid r=3.5 — sits at the open end of the
  "D", as if the letter resolves into a decision.

**Silhouette at 16px:** Must still read as "D" + dot. Test by squinting:
if it becomes an abstract arrow, simplify curves to straight lines (fallback
within this direction: all three paths straight, same as Direction B but
with a vertical stem added at x=14).

**Wordmark pairing:** Best with refined serif (Direction 1). The serif's
"classical D" echoes the monogram without duplicating it.

**Accent option:** Decision node only in #1A3C6E.

**ASCII preview**
```
|\
| \
|  ●
| /
|/
```

---

## RECOMMENDED NEXT STEP

1. Generate quick monochrome SVG mocks for A, B, and C at 64×64 and 16×16.
2. Eliminate any direction that loses the convergence story or clutters at
   favicon size.
3. Pair the surviving mark with both wordmark options (serif + sans).
4. Lock primary lockup, then export the full variant set.

**Default recommendation:** Start with **Direction B** for production
(favicon clarity + mathematical tone), keep **Direction C** as the
monogram-led alternative if brand recall outweighs small-size simplicity.