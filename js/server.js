const express = require('express');
const cors = require('cors');
const midtransClient = require('midtrans-client');

const app = express();
app.use(cors());
app.use(express.json());

const snap = new midtransClient.Snap({
  isProduction: false, 
  serverKey: 'SB-Mid-server-xxx' 
});

app.post('/create-snap-token', async (req, res) => {
  const { amount, email, customerName } = req.body;

  try {
    const parameter = {
      transaction_details: {
        order_id: 'ORDER-' + Date.now(),
        gross_amount: amount
      },
      customer_details: {
        first_name: customerName || "Guest",
        email: email || "guest@example.com"
      }
    };

    const transaction = await snap.createTransaction(parameter);
    res.json({ token: transaction.token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 🔥 INI PENTING untuk Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



