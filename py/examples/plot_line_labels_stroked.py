# Plot / Line / Labels/ Stroked
# No description available.
# ---
from synth import FakeTimeSeries
from telesync import site, data, ui

page = site['/demo']

n = 50
f = FakeTimeSeries()
v = page.add('example', ui.plot_card(
    box='1 1 4 5',
    title='Labels, less messy',
    data=data('date price', n),
    vis=ui.vis([ui.mark(mark='line', x_scale='time', x='=date', y='=price', y_min=0,
                        label='=${{intl price minimum_fraction_digits=2 maximum_fraction_digits=2}}',
                        label_fill_color='rgba(0,0,0,0.65)', label_stroke_color='#fff', label_stroke_size=2)])
))
v.data = [(t, x) for t, x, dx in [f.next() for _ in range(n)]]

page.sync()