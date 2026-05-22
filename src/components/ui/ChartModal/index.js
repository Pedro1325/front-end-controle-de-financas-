import { FiX } from 'react-icons/fi';
import {
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
} from 'recharts';
import { formatCurrency } from '../../../core/utils/formatters';
import * as C from './styles';

const COLORS = {
  income: '#22c55e',
  expense: '#ef4444',
};

const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null;
  const data = payload[0].payload;
  return (
    <div
      style={{
        background: '#fff',
        border: '1px solid #e2e8f0',
        borderRadius: 6,
        padding: '8px 12px',
        fontSize: 13,
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      }}
    >
      <strong>{data.name}</strong>
      <div style={{ color: data.fill }}>{formatCurrency(data.value)}</div>
    </div>
  );
};

const aggregateByCategory = (transactions, isExpense) => {
  const filtered = transactions.filter((t) => t.expense === isExpense);
  const map = {};
  filtered.forEach((t) => {
    const key = t.desc || 'Sem descrição';
    map[key] = (map[key] || 0) + Number(t.amount);
  });
  return Object.entries(map).map(([name, value]) => ({ name, value }));
};

const ChartModal = ({ transactions, onClose }) => {
  const incomeData = aggregateByCategory(transactions, false);
  const expenseData = aggregateByCategory(transactions, true);

  const totalIncome = incomeData.reduce((a, i) => a + i.value, 0);
  const totalExpense = expenseData.reduce((a, i) => a + i.value, 0);

  const comparisonData = [
    { name: 'Entradas', value: totalIncome, fill: COLORS.income },
    { name: 'Saídas', value: totalExpense, fill: COLORS.expense },
  ];

  const hasIncome = incomeData.length > 0;
  const hasExpense = expenseData.length > 0;

  return (
    <C.Overlay onClick={onClose}>
      <C.Modal onClick={(e) => e.stopPropagation()}>
        <C.Header>
          <C.Title>Gráficos Financeiros</C.Title>
          <C.CloseButton onClick={onClose}>
            <FiX />
          </C.CloseButton>
        </C.Header>

        {!hasIncome && !hasExpense ? (
          <C.EmptyMessage>
            Nenhuma transação cadastrada para exibir gráficos.
          </C.EmptyMessage>
        ) : (
          <C.ChartRow>
            {/* Gráfico de comparação Entradas vs Saídas */}
            <div style={{ width: '100%' }}>
              <C.ChartTitle>Entradas vs Saídas</C.ChartTitle>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={comparisonData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                    {comparisonData.map((entry, idx) => (
                      <Cell key={idx} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              <C.LegendRow>
                <C.LegendItem>
                  <C.LegendDot $color={COLORS.income} />
                  Entradas: {formatCurrency(totalIncome)}
                </C.LegendItem>
                <C.LegendItem>
                  <C.LegendDot $color={COLORS.expense} />
                  Saídas: {formatCurrency(totalExpense)}
                </C.LegendItem>
              </C.LegendRow>
            </div>

            {/* Gráfico de pizza — Despesas por categoria */}
            {hasExpense && (
              <div style={{ width: '100%' }}>
                <C.ChartTitle>Despesas por categoria</C.ChartTitle>
                <ResponsiveContainer width="100%" height={260}>
                  <PieChart>
                    <Pie
                      data={expenseData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={90}
                      innerRadius={40}
                      paddingAngle={3}
                    >
                      {expenseData.map((_, idx) => (
                        <Cell
                          key={idx}
                          fill={`hsl(${idx * 45}, 70%, 55%)`}
                        />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            )}

            {/* Gráfico de pizza — Receitas por categoria */}
            {hasIncome && (
              <div style={{ width: '100%' }}>
                <C.ChartTitle>Receitas por categoria</C.ChartTitle>
                <ResponsiveContainer width="100%" height={260}>
                  <PieChart>
                    <Pie
                      data={incomeData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={90}
                      innerRadius={40}
                      paddingAngle={3}
                    >
                      {incomeData.map((_, idx) => (
                        <Cell
                          key={idx}
                          fill={`hsl(${150 + idx * 40}, 60%, 50%)`}
                        />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            )}
          </C.ChartRow>
        )}
      </C.Modal>
    </C.Overlay>
  );
};

export default ChartModal;
